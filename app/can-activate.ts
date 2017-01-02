import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router : Router) {}

  canActivate() {
    if(this.authService.checkIfUserIsLoggedIn()){
      return true;
    }
    this.router.navigate(['user/login']);
    return false;

  }
}