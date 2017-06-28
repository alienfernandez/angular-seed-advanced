import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {LocalStorageService} from "angular-2-local-storage";
import {OAuth2Token} from "../../security/index";
import {Config} from '../../core/index';

@Injectable()
export class HttpService extends Http {
  //url base according to the config app
  public baseAPI: string;

  /**
   *
   * @param backend
   * @param options
   * @param localStorage
   */
  constructor(backend: XHRBackend, options: RequestOptions, private localStorage: LocalStorageService) {
    super(backend, options);
    let token = <OAuth2Token>(this.localStorage.get('auth_token')); // your custom token getter function here
    if (token !== null) {
      options.headers.set('Authorization', `Bearer ${token.access_token}`);
    }
    // this.baseAPI = Config.ENVIRONMENT().API;
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = <OAuth2Token>(this.localStorage.get('auth_token'));
    if (token !== null) {
      if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
        if (!options) {
          // let's make option object
          options = {headers: new Headers()};
        }
        options.headers.set('Authorization', `Bearer ${token.access_token}`);
      } else {
        // we have to add the token to the url object
        url.headers.set('Authorization', `Bearer ${token.access_token}`);
      }
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError(self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }


  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleErrorObservable(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public handleErrorPromise(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
