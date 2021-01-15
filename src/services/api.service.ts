import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import LocalStorage from '@/services/local-storage.service';

class ApiService {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = Axios.create({
      baseURL: process.env.VUE_APP_API_BASE_URL
    });
  }

  /**
   * doPostRequest
   */
  public async doPostRequest<P, R>(url: string, data: P): Promise<R> {
    this.setAuthToken();
    const apiResponse = await this.apiInstance.post<P, AxiosResponse<R>>(url, data);
    return apiResponse.data;
  }

  /**
   * doGetRequest
   */
  public async doGetRequest<R>(url: string): Promise<R> {
    this.setAuthToken();
    const apiResponse = await this.apiInstance.get<R>(url);
    return apiResponse.data;
  }

  /**
   * doPatchRequest
   */
  public async doPatchRequest<P, R>(url: string, data: P): Promise<R> {
    this.setAuthToken();
    const apiResponse = await this.apiInstance.patch<P, AxiosResponse<R>>(url, data);
    return apiResponse.data;
  }

  private setAuthToken(): void {
    const token: string | null = LocalStorage.getAuthToken();
    if (token) {
      // applying token
      this.apiInstance.defaults.headers.common.Authorization = 'Bearer ' + token;
    } else {
      // deleting the token from header
      delete this.apiInstance.defaults.headers.common.Authorization;
    }
  }
}

export default new ApiService();
