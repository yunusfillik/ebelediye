import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

export enum StorageKeys {
  'LOGGED_USER' = 'LOGGED_USER',
  'AUTH_TOKEN' = 'AUTH_TOKEN',
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {

  }

  async init() {
    if(this._storage) return;
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async get(key: StorageKeys) {
    const res = await this._storage?.get(key);
    return res;
  }

  public set(key: StorageKeys, value: any): void {
    this._storage?.set(key, value);
  }

  public remove(key: StorageKeys): void {
    this._storage?.remove(key);
  }

  public clear(): void {
    this._storage?.clear();
  }
}
