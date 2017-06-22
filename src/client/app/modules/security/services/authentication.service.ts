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

@Injectable()
export class AuthenticationService extends Analytics {
  private credentials: ICredentialState;

  constructor(public analytics: AnalyticsService, private http: Http,
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

  onIdentity(response: any): Observable<IAuthenticationState> {
    console.log("response", response);
    if (!response) return Observable.of(null);
    let encodedUser: any;
    let user: any;
    //Encode user for JWT
    // if (!_.isUndefined((<any>response).token)) {
    //   // Set local storage data
    //   // this.localStorageService.set('JWT', response.token);
    //   encodedUser = decodeURI(StringUtil.b64ToUtf8(response.token.split('.')[1]));
    //   user = JSON.parse(encodedUser);
    // }
    return Observable.of(<IAuthenticationState>{
      credentials: user || response,
      isAdmin: false, //TODO check if the user is a admin member
      redirectTo: (response.redirect) ? response.redirect : ''
    });

  }

  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  signIn(credentials: any, uri = '/auth/local'): Observable<any> {
    // console.log("credentials", credentials);
    return this.http.post(Config.ENVIRONMENT().API + '/api/login', {
      "email": "peter@klaven",
      "password": "cityslicka"
    })
      .map(this.coreHttp.extractData)
      .switchMap(data => this.onIdentity(data))
      .catch(this.coreHttp.handleErrorObservable);
  }
}
