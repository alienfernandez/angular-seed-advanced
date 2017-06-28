import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpService} from "../../core/services/http.service";
import {Observable} from "rxjs/Rx";
// import UserModel from "../models/user.model";

@Injectable()
export class SecurityService {

  constructor(private http: Http, private coreHttp: HttpService) {
  }

  /**
   * Sign in
   * @param credentials
   * @param uri
   * @returns {Promise}
   */
  test(): Observable<any> {
    console.log("Tessssssssssssssss");
    return this.coreHttp.get('http://127.0.0.1:8000/api/groups/')
      .map(this.coreHttp.extractData)
      .catch(this.coreHttp.handleErrorObservable);
  }

}
