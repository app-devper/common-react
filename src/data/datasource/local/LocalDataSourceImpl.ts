import LocalDataSource from "./LocalDatasource";

const CACHED_TOKEN = 'CACHED_TOKEN';

export default class LocalDataSourceImpl implements LocalDataSource {
  cacheToken(accessToken: string): Promise<void> {
    localStorage.setItem(CACHED_TOKEN, accessToken)
    return Promise.resolve();
  }

  clearToken(): Promise<boolean> {
    localStorage.removeItem(CACHED_TOKEN)
    return Promise.resolve(true);
  }

  getLastToken(): Promise<string> {
    const token = localStorage.getItem(CACHED_TOKEN) ?? ""
    return Promise.resolve(token);
  }
}
