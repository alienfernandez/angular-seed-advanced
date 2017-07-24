// angular
import {Injectable} from '@angular/core';

// libs
import {Store, Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from 'angular-2-local-storage';
import {IUserShort, UserResource} from '../resources/UserResource';

// module
import {AuthProviderManager} from '../../security/services/index';
import {UserAction} from '../actions/user.action';
import {UserService} from "../index";
import {Config, HttpService} from "../../core/index";

@Injectable()
export class UserEffects {

  constructor(private store: Store<any>, private actions$: Actions,
              private authService: AuthProviderManager, private userResource: UserResource,
              private sessionStorage: LocalStorageService, private http: HttpService) {
  }

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  // @Effect() init$: Observable<Action> = this.actions$
  //   .ofType(NameList.ActionTypes.INIT)
  //   .startWith(new NameList.InitAction)
  //   .switchMap(() => this.nameListService.getNames())
  //   .map(payload => {
  //     let names = payload;
  //     return new NameList.InitializedAction(names);
  //   })
  //   // nothing reacting to failure at moment but you could if you want (here for example)
  //   .catch(() => Observable.of(new NameList.InitFailedAction()));

  @Effect() getUsers$: Observable<Action> = this.actions$
    .ofType(UserAction.ActionTypes.GET_USERS)
    .switchMap((action: any) => this.userResource.query().$observable)
    // .switchMap((action: any) => this.http.get(Config.ENVIRONMENT().API + '/api/users/')
    //     .map(res => res.json()))
    .map(data => {
      return new UserAction.SetUsersAction(data);
    })
    .catch(error => Observable.of(new UserAction.UserFailedAction('Failed to get users: ' + error)));

}
