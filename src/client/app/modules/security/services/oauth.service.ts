// angular
import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';

// libs
import {Observable} from "rxjs/Rx";
import {Store} from '@ngrx/store';

import {IAppState, getAuth} from '../../ngrx/index';

import * as _ from 'lodash';

// app
import {Config} from '../../core/index';
import {HttpService} from "../../core/services/http.service";
import {IAuthenticationState, ICredentialState} from '../index';

// module
import {IAuthService} from "../interfaces/security.interface";

@Injectable()
export class OAuthService implements IAuthService {

  private OauthLoginEndPointUrl = Config.ENVIRONMENT().API + '/o/token/';  // Oauth Login EndPointUrl to web API
  private clientId = 'ENLN9cCzyeBb98UFLN5ou6Ouafi6DzkPKgBjmaSl';
  private clientSecret = '7akGq6GSnmdDmFM5TFAGcUuw1a6nZZGOEI9fi1DvRFHKLdK45CRqXaWT5JBdQ8cyxdnqm5F66bVD6SsHsdEfUkHSidHEuSUK9yPvK78VyXkqYF7nUJfU5YfL1qUhw6gw';

  constructor(private http: Http, private coreHttp: HttpService, private store: Store<IAppState>) {
  }


  onIdentity(response: any): Observable<IAuthenticationState> {
    console.log("response", response);
    if (!response) return Observable.of(null);
    return Observable.of(<IAuthenticationState>{
      credentials: response,
      isAdmin: false, //TODO check if the user is a admin member
      redirectTo: (response.redirect) ? response.redirect : ''
    });

  }

  getToken(credentials: any): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ':' + this.clientSecret));
    // headers.append('Content-Type', 'multipart/form-data');
    let options = new RequestOptions(<RequestOptionsArgs>{headers: headers});

    var fd = new FormData();
    fd.append('grant_type', 'password');
    // fd.append('username', 'admin');
    fd.append('username', credentials.username);
    // fd.append('password', 'daniela2017**');
    fd.append('password', credentials.password);

    return this.http.post(this.OauthLoginEndPointUrl, fd, options)
      .map(this.coreHttp.extractData)
      .switchMap(data => this.onIdentity(data))
      .catch(this.coreHttp.handleErrorObservable);
  }

  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  signIn(credentials: any, uri = '/auth/local'): Observable<any> {
    // console.log("credentials", credentials);
    return this.getToken(credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
