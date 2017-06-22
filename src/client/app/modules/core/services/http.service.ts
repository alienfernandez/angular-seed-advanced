import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
// import appConfig from '../config/default.config';

@Injectable()
export class HttpService {
  //url base according to the config app
  public urlBase: string;
  public urlExternal: string;

  constructor(private http: Http) {
    // this.urlBase = appConfig.server + ":" + appConfig.port;
    // this.urlExternal = appConfig.externals.server1;
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
