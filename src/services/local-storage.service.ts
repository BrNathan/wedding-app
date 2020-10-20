import LOCAL_STORAGE from '@/utils/constants/local-storage';

class LocalStorageService {
  /**
   * setAuthToken
   */
  public setAuthToken(jwtToken: string): void {
    localStorage.setItem(LOCAL_STORAGE.authToken, jwtToken);
  }

  /**
   * getAuthToken
   */
  public getAuthToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE.authToken);
  }

  /**
   * resetAuthToken
   */
  public resetAuthToken(): void {
    localStorage.removeItem(LOCAL_STORAGE.authToken);
  }
}

export default new LocalStorageService();
