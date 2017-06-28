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
import {IAuthenticationProvider} from "../interfaces/security.interface";
import {AuthenticationProvider} from "./authentication-provider";

@Injectable()
export class BasicAuthProvider extends AuthenticationProvider implements IAuthenticationProvider {

  constructor(protected http: Http, protected coreHttp: HttpService, protected store: Store<IAppState>) {
    super(http, coreHttp, store);
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
  authenticate(credentials: any): Observable<any> {
    return this.http.post(Config.ENVIRONMENT().API + '/api/login', {
      "email": "peter@klaven",
      "password": "cityslicka"
    })
      .map(this.coreHttp.extractData)
      // .switchMap(data => this.onIdentity(data))
      .catch(this.coreHttp.handleErrorObservable);
  }
}
