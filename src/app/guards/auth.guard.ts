import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService, StorageKeys } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const loggedUser = await this.storageService.get(StorageKeys.LOGGED_USER);
      if (loggedUser) {
          return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}
