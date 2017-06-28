// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from "rxjs/Rx";
import {Store} from '@ngrx/store';

import {IAppState, getAuth} from '../../ngrx/index';

import * as _ from 'lodash';

// app
import {HttpService} from "../../core/services/http.service";
import {IAuthenticationState, ICredentialState} from '../index';

// module
import {IAuthenticationProvider} from "../interfaces/security.interface";

@Injectable()
export class AuthenticationProvider implements IAuthenticationProvider {
  protected credentials: ICredentialState;

  constructor(protected http: Http, protected coreHttp: HttpService, protected store: Store<IAppState>) {
  }

  /**
   * Get credentials from Store
   * @returns {any}
   */
  getCredentials(): ICredentialState {
    return null;
  }


  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  authenticate(credentials: any): Observable<any> {
    return null;
  }
}
