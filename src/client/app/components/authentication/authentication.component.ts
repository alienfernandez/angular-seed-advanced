// libs
import {Injector, Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

// app
import {RouterExtensions, Config} from '../../modules/core/index';
import {IAppState} from '../../modules/ngrx/index';
import {AuthAction, AuthenticationService} from '../../modules/security/index';

@Component({
  moduleId: module.id,
  selector: 'sd-auth',
  templateUrl: 'authentication.component.html',
  styleUrls: [
    'authentication.component.css',
  ],
})
export class AuthenticationComponent {

  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private injector: Injector, private store: Store<IAppState>, public routerExt: RouterExtensions,
              public auth: AuthenticationService) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }


  /*
   * @param data - Auth credentials.
   */
  signIn(data): boolean {
    this.store.dispatch(new AuthAction.LoginAction(data));
    return false;
  }

  test() {
    console.log("RRRRRRR", this.auth.getCredentials());
  }
}
