// angular
import {Injectable} from '@angular/core';

// libs
import {Store, Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';

// module
import {AuthenticationService} from '../services/authentication.service';
import {AuthAction} from '../actions/authentication.action';

@Injectable()
export class AuthEffects {

  constructor(private store: Store<any>,
              private actions$: Actions,
              private authService: AuthenticationService) {
  }


  @Effect() signIn$: Observable<Action> = this.actions$
    .ofType(AuthAction.ActionTypes.LOGIN)
    .switchMap((action) => {
      let data = action.payload;
      return this.authService.signIn(data.credentials);
    })
    .mergeMap(credentials => {
      console.log("credentials!!", credentials);
      // analytics
      this.authService.track(AuthAction.ActionTypes.LOGIN, {label: credentials});
      localStorage.setItem('token', credentials.credentials);
      return [
        new AuthAction.SetCredentialsAction(credentials),
        go('/')
      ];
    })
    //Redirect to Home
    // .map((data) => go('/'))
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch((error) => {
      console.log("ERROR LOGIN", error);
      // analytics
      this.authService.track(AuthAction.ActionTypes.LOGIN_FAILED, {label: error});
      return Observable.of(new AuthAction.LoginFailedAction("Login Failed: " + error));
    });

}
