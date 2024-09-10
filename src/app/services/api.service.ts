import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  async get<T>(endpoint: string, params?: any): Promise<T> {
    return firstValueFrom(
      this.http.get<T>(`${this.apiUrl}${endpoint}`, { params })
        .pipe(
          catchError((err: HttpErrorResponse ) => this.handleError(err))
        )
    );
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return firstValueFrom(
      this.http.post<T>(`${this.apiUrl}${endpoint}`, data)
        .pipe(
          catchError((err: HttpErrorResponse ) => this.handleError(err))
        )
    );
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return firstValueFrom(
      this.http.put<T>(`${this.apiUrl}${endpoint}`, data)
        .pipe(
          catchError((err: HttpErrorResponse ) => this.handleError(err))
        )
    );
  }

  async delete<T>(endpoint: string): Promise<T> {
    return firstValueFrom(
      this.http.delete<T>(`${this.apiUrl}${endpoint}`)
        .pipe(
          catchError((err: HttpErrorResponse ) => this.handleError(err))
        )
    );
  }


  private handleError(error: HttpErrorResponse) {
    //TODO
    console.log(error)
    const customErrorResponse = {
      success: false,
      message: this.getErrorMessage(error)
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
