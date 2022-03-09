export default interface LocalDataSource {
  getLastToken(): Promise<string>;

  cacheToken(accessToken: string): Promise<void>;

  clearToken(): Promise<boolean>;
}
