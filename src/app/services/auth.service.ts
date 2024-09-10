import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageKeys, StorageService } from './storage.service';

export interface ServerResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

export interface LoginResponse {
  success: boolean;
  data?: LoginResponse;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.authServerURL + 'connect/token';
  private _token: string;
  private _logedUsername: string;
  private _logedPassword: string;
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  get token() {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get logedUsername() {
    return this._logedUsername;
  }

  set logedUsername(value: string) {
    this._logedUsername = value;
  }

  get logedPassword() {
    return this._logedPassword;
  }

  set logedPassword(value: string) {
    this._logedPassword = value;
  }

  reset() {
    this.storageService.clear();
    this.token = '';
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', environment.authServerClientID)
      .set('scope', environment.authServerScope)
      .set('username', username)
      .set('password', password);
    const res = await firstValueFrom<ServerResponse>(
      this.http
        .post<ServerResponse>(this.url, body.toString(), {
          headers: new HttpHeaders().set(
            'Content-Type',
            'application/x-www-form-urlencoded'
          ),
        })
        .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
    );
    if (res.access_token) {
      const data = {
        token: res.access_token,
        username: username,
        password: password,
      };
      this.setTokenAndStorage(data);
    }
    return this.handleSuccess<LoginResponse>(res);
  }

  private setTokenAndStorage(data: {
    token: string;
    username: string;
    password: string;
  }) {
    this.token = data.token;
    this.logedUsername = data.username;
    this.logedPassword = data.password;
    const userData = { username: data.username, password: data.password };
    this.storageService.set(StorageKeys.LOGGED_USER, JSON.stringify(userData));
    this.storageService.set(StorageKeys.AUTH_TOKEN, this.token);
  }

  private handleSuccess<T>(data: any) {
    //TODO
    const customSuccessResponse = {
      success: true,
      data,
    } as T;
    return customSuccessResponse;
  }

  private handleError(error: HttpErrorResponse) {
    //TODO
    const customErrorResponse = {
      success: false,
      message: this.getErrorMessage(error),
    } as any;
    return of(customErrorResponse);
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // Client-side veya network hatası
      return `Hata: ${error.error.message}`;
    } else {
      // Backend hatası
      return `Sunucu hatası: ${error.status}\nMesaj: ${error.message}`;
    }
  }
}
