import {Resource} from 'ngx-resource';
import {HttpService} from './http.service';

export class AuthGuardResource extends Resource {
  protected http: HttpService;

  constructor(http: HttpService) {
    super(http);
  }

}
