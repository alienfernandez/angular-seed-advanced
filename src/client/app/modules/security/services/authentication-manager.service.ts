// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from "rxjs/Rx";
import {Store} from '@ngrx/store';

import {IAppState, getAuth} from '../../ngrx/index';

import * as _ from 'lodash';

// app
import {Analytics, AnalyticsService} from '../../analytics/index';
import {HttpService} from "../../core/services/http.service";

// module
import {AuthAction} from '../actions/index';
import {AuthenticationProvider} from "./authentication-provider";
import {BasicAuthProvider} from "./basic-authentication-provider";
import {OAuthAuthProvider} from "./oauth2-authentication-provider";

@Injectable()
export class AuthProviderManager {

  private default_auth_provider: string = 'oauth';

  constructor(private authProvider: AuthenticationProvider) {
  }

  public getAuthProvider() {
    return this.authProvider;
  }

  /**
   * Authenticate
   * @param credentials
   * @returns {Promise}
   */
  authenticate(credentials: any, provider?: OAuthAuthProvider|BasicAuthProvider): Observable<any> {
    let auth: any;
    //Check if we have a provider to make the auth process
    if (provider) {
      auth = provider.authenticate(credentials);
    } else {
      auth = this.authProvider.authenticate(credentials);
    }
    return auth;
  }
}
