// angular
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

// libs
import {Observable} from 'rxjs/Observable';

// app
import {Config} from '../../core/index';
import {Analytics, AnalyticsService} from '../../analytics/index';


@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Observable<Array<string>> {
    return this.http.get(Config.ENVIRONMENT().API + '/api/users')
      .map(res => res.json());
  }
}
