// angular
import {Injectable} from '@angular/core';

// libs
import {Store, Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {go} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from 'angular-2-local-storage';

// module
import {AuthProviderManager} from '../services/index';
import {AuthAction} from '../actions/authentication.action';

@Injectable()
export class AuthEffects {

  constructor(private store: Store<any>, private actions$: Actions,
              private authService: AuthProviderManager, private sessionStorage: LocalStorageService) {
  }


  @Effect() signIn$: Observable<Action> = this.actions$
    .ofType(AuthAction.ActionTypes.LOGIN)
    .switchMap((action: any) => {
      // This is the disposable stream!
      // Errors can safely occur in here without killing the original stream
      return this.authService.authenticate(action.payload.credentials)
        .catch(error => Observable.of(new AuthAction.LoginFailedAction('Login Failed: ' + error)));
    })
    .mergeMap((credentials: any) => {
      //Check if there are problems with the login
      if (credentials && credentials.type === '[AuthAction] Login Failed') {
        return [credentials];
      } else {
        // analytics
        // this.authService.track(AuthAction.ActionTypes.LOGIN, {label: credentials});
        this.sessionStorage.set('auth_token', credentials.credentials);
        return [
          new AuthAction.SetCredentialsAction(credentials),
          go('/')
        ];
      }

    });

}
