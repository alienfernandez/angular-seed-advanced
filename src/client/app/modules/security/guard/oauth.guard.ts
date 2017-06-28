import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class CanActivateOAuthGuard implements CanActivate {

  constructor(public router: Router, private localStorage: LocalStorageService) {
  }

  canActivate() {
    //Redirecting if oauth2 token doesn't exist
    if (this.localStorage.get("auth_token") === null) {
      this.router.navigateByUrl('/signin');
    }
    return (this.localStorage.get("auth_token") === null) ? false : true;
  }
}
