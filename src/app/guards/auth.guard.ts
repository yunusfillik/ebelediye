import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService, StorageKeys } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  storageService = inject(StorageService);
  authService = inject(AuthService);
  router = inject(Router);
  constructor() { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authService.token;
    if (token) return true;
    await this.storageService.init();
    const loggedUser = await this.storageService.get(StorageKeys.LOGGED_USER);
    if (loggedUser) {
      const authToken = await this.storageService.get(StorageKeys.AUTH_TOKEN);
      this.authService.token = authToken;
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
