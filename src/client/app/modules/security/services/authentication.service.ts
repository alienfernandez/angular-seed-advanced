// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from "rxjs/Rx";
import {Store} from '@ngrx/store';

import {IAppState, getAuth} from '../../ngrx/index';

import * as _ from 'lodash';

// app
import {Config} from '../../core/index';
import {Analytics, AnalyticsService} from '../../analytics/index';
import StringUtil from "../../core/utils/string.util";
import {HttpService} from "../../core/services/http.service";
import {IAuthenticationState, ICredentialState} from '../index';

// module
import {AuthAction} from '../actions/index';
import {OAuthService} from "./oauth.service";

@Injectable()
export class AuthenticationService extends Analytics {
  private credentials: ICredentialState;
  private DEFAULT_AUTH_METHOD = 'oauth';

  constructor(public analytics: AnalyticsService, private http: Http, private oauth: OAuthService,
              private coreHttp: HttpService, private store: Store<IAppState>) {
    super(analytics);
    this.category = AuthAction.CATEGORY;
  }

  /**
   * Get credentials from Store
   * @returns {any}
   */
  getCredentials(): ICredentialState {
    this.store.let(getAuth).subscribe((auth: any) => this.credentials = auth);
    return this.credentials;
  }


  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  signIn(credentials: any, uri = '/auth/local'): Observable<any> {
    // console.log("credentials", credentials);
    return this.oauth.signIn(credentials, uri);
    // return this.http.post(Config.ENVIRONMENT().API + '/api/login', {
    //   "email": "peter@klaven",
    //   "password": "cityslicka"
    // })
    //   .map(this.coreHttp.extractData)
    //   .switchMap(data => this.onIdentity(data))
    //   .catch(this.coreHttp.handleErrorObservable);
  }
}
