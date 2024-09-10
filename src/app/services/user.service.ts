import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface GetUserIdResponse {
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'user/GetCurrentUserId';
  private _loggedUserId: string = '';
  constructor(private apiService: ApiService) { }

  get loggedUserId() {
    return this._loggedUserId;
  }

  set loggedUserId(value: string) {
    this._loggedUserId = value;
  }

  reset() {
    this._loggedUserId = '';
  }

  async get(): Promise<GetUserIdResponse> {
    const res = await this.apiService.get<GetUserIdResponse>(this.apiUrl);
    if (res.userId) this.loggedUserId = res.userId;
    return res;
  }

}
