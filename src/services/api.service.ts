import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import LocalStorage from '@/services/local-storage.service';

class ApiService {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = Axios.create({
      baseURL: 'http://[::1]:3000/'
    });
  }

  /**
   * doPostRequest
   */
  public async doPostRequest<P, R>(url: string, data: P) {
    this.setAuthToken();
    const apiResponse = await this.apiInstance.post<P, AxiosResponse<R>>(url, data);
    return apiResponse.data;
  }

  private setAuthToken(): void {
    const token: string | null = LocalStorage.getAuthToken();
    if (token) {
      // applying token
      this.apiInstance.defaults.headers.common.Authorization = token;
    } else {
      // deleting the token from header
      delete this.apiInstance.defaults.headers.common.Authorization;
    }
  }
}

export default new ApiService();
