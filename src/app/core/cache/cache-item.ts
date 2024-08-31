export class CacheItem {
  public key?: string;
  public data?: object;
  public live?: number;
  public createdAt?: number;

  constructor(key: string, data: object, live: number, createdAt: number) {
    this.key = key;
    this.data = data;
    this.live = live;
    this.createdAt = createdAt;
  }

  getLive(): number {
    return this.live ?? 0;
  }

  getCreatedAt(): number {
    return this.createdAt ?? 0;
  }

  getData(): object {
    return this.data ?? {};
  }

  getMaxLive(): number {
    return this.getLive() + this.getCreatedAt();
  }
}
