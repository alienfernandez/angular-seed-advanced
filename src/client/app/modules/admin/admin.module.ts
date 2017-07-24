import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import {SharedModule} from '../shared/index';
// ag-grid
import {AgGridModule} from 'ag-grid-angular/main';

// modules
import {MODULE_COMPONENTS} from './components/index';
import {MODULE_ROUTES} from './admin.routes';
import {UserEffects} from './effects/index';
import {ADMIN_PROVIDERS} from "./index";

const ADMIN_MODULES: any[] = [];

/**
 * AdminModule
 * Only for Admin components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */

@NgModule({
  imports: [
    ...ADMIN_MODULES,
    SharedModule,
    RouterModule.forChild(MODULE_ROUTES),
    AgGridModule.withComponents(
      [...MODULE_COMPONENTS]
    ),
    EffectsModule.run(UserEffects),
  ],
  declarations: [
    ...MODULE_COMPONENTS
  ],
  providers:[
    ...ADMIN_PROVIDERS
  ],
  exports: [
    ...ADMIN_MODULES,
    ...MODULE_COMPONENTS,
    SharedModule
  ]
})
export class AdminModule {
}
