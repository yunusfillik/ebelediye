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
  private token: string;
  private logedUsername: string;
  private logedPassword: string;
  constructor(private http: HttpClient) {}

  getToken(): string {
    return this.token;
  }

  getLogedUsername(): string {
    return this.logedUsername;
  }

  getLogedPassword(): string {
    return this.logedPassword;
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
      this.token = res.access_token;
      this.logedUsername = username;
      this.logedPassword = password;
    }
    return this.handleSuccess<LoginResponse>(res);
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
