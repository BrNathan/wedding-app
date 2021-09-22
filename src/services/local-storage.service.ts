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

  /**
   * setWantedPageName
   */
  public setWantedPageName(pageName: string): void {
    localStorage.setItem(LOCAL_STORAGE.wantedPageName, pageName);
  }

  /**
   * getWantedPageName
   */
  public getWantedPageName(): string | null {
    return localStorage.getItem(LOCAL_STORAGE.wantedPageName);
  }

  /**
   * resetWantedPage
   */
  public resetWantedPage(): void {
    localStorage.removeItem(LOCAL_STORAGE.wantedPageName);
  }
}

export default new LocalStorageService();
