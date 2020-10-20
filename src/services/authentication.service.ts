import passwordHasher from '@/services/password-hasher.service';
import ApiService from '@/services/api.service';
import API_ENDPOINTS from '@/utils/constants/api-endpoints';
import { IsNullOrUndefined, IsNullOrWhiteSpace } from '@/utils/extensions';

declare interface JWTTokenPayload {
  email: string;
  username: string;
  userGroup: string;
  id: string;
  exp: number;
  iat: number;
}

class AuthenticationService {
  /**
   * login
   */
  public async login(credential: {username: string; password: string}) {
    const passwordHashed: string = passwordHasher.hash(credential.password);
    const tokenResult = await ApiService.doPostRequest<{ email: string; password: string }, {token: string}>(API_ENDPOINTS.login, { email: credential.username, password: passwordHashed });
    return tokenResult.token;
  }

  public isTokenValid(token: string | null): boolean {
    let isValid = false;
    try {
      if (!IsNullOrWhiteSpace(token)) {
        this.readJWTToken<JWTTokenPayload>(token as string);

        // token expires
        if (this.isTokenExpiredLessThan(token as string, 0, 0)) {
          isValid = true;
        }
      }
    } catch (error) {
      isValid = false;
    }

    return isValid;
  }

  private readJWTToken<T>(token: string): T {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload) as T;
    } catch (error) {
      throw new Error('Unable to read the JWT token');
    }
  }

  public isTokenExpiredLessThan(token: string, hours: number, minutes: number): boolean {
    let isTokenExpiredLessThanTime = false;

    if (
      !IsNullOrWhiteSpace(token) &&
      !IsNullOrUndefined(hours) &&
      !IsNullOrUndefined(minutes)) {
      try {
        const payload: JWTTokenPayload = this.readJWTToken<JWTTokenPayload>(token);

        const maxTime: number = (payload.exp * 1000) + (hours * 60 + minutes) * 60 * 1000;
        if (maxTime > Date.now()) {
          isTokenExpiredLessThanTime = true;
        }
      } catch (error) {
        isTokenExpiredLessThanTime = false;
      }
    }
    return isTokenExpiredLessThanTime;
  }
}

export default new AuthenticationService();
