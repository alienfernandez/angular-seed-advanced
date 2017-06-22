import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpService} from "../../core/services/http.service";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs/Rx";
// import UserModel from "../models/user.model";

@Injectable()
export class SecurityService {

  constructor(private http: Http, private coreHttp: HttpService, private authService: AuthenticationService) {
  }

  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  signIn(credentials: any, uri = '/auth/local'): Observable<any> {
    return this.http.post(this.coreHttp.urlBase + uri, credentials)
      .map(this.coreHttp.extractData)
      .catch(this.coreHttp.handleErrorObservable);
  }

  /**
   * signUp user
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  signUp(credentials: any, uri = '/register'): Observable<any> {
    var url = this.coreHttp.urlBase + uri;
    return this.http.post(url, credentials)
      .map(this.coreHttp.extractData)
      .catch(this.coreHttp.handleErrorObservable);
  }


  logOut(): Observable<any> {
    var url = this.coreHttp.urlBase + '/signout';
    return this.http.get(url)
      .map(this.coreHttp.extractData)
      .catch(this.coreHttp.handleErrorObservable);
  }

}
