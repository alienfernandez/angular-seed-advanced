import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/index';
// ag-grid
import {AgGridModule} from 'ag-grid-angular/main';

// modules
import {MODULE_COMPONENTS} from './components/index';
import {MODULE_ROUTES} from './admin.routes';

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
    )
  ],
  declarations: [
    ...MODULE_COMPONENTS
  ],
  exports: [
    ...ADMIN_MODULES,
    ...MODULE_COMPONENTS,
    SharedModule
  ]
})
export class AdminModule {
}
