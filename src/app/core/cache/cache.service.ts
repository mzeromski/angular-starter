import { CacheItem } from './cache-item';

export class CacheService {
  static readonly prefix: string = 'ANGULAR_';

  static setCacheForever(key: string, data: object): void {
    CacheService.setCache(key, data, Number.MAX_SAFE_INTEGER);
  }

  static setCache(key: string, data: object, live: number): void {
    live = live * 1000;
    const cacheItem: CacheItem = new CacheItem(
      CacheService.prefix + key,
      data,
      live,
      new Date().getTime()
    );

    localStorage.setItem(CacheService.prefix + key, JSON.stringify(cacheItem));
  }

  static isCache(key: string, returnObject: boolean = false): boolean | CacheItem {
    key = CacheService.prefix + key;

    const dataFromLocalStorage: string | null = localStorage.getItem(key);
    if (!dataFromLocalStorage) {
      return false;
    }
    let cacheItem: CacheItem;
    try {
      const cacheItemData: CacheItem = JSON.parse(dataFromLocalStorage);

      console.log(cacheItemData);
      cacheItem = new CacheItem(
        cacheItemData.key!,
        cacheItemData.data!,
        cacheItemData.live!,
        cacheItemData.createdAt!
      );
    } catch (error) {
      console.warn(error);
      return false;
    }

    const now: number = new Date().getTime();

    if (cacheItem.getMaxLive() < now) {
      localStorage.removeItem(key);
      return false;
    }

    if (returnObject) {
      return cacheItem;
    }

    return true;
  }

  static getCache<T>(key: string): T | null {
    const cache: boolean | CacheItem = CacheService.isCache(key, true);
    if (cache === false) {
      return null;
    }

    if (cache instanceof CacheItem) {
      return cache.getData() as T;
    }
    return null;
  }
}
