import {HomeAdminComponent} from './components/home/home.component';
import {UserAdminComponent} from './components/user/user.component';
import {CanActivateOAuthGuard} from '../security/index';

export const MODULE_ROUTES: Array<any> = [
  {path: '', component: HomeAdminComponent, canActivate: [CanActivateOAuthGuard]},
  {path: 'admin/security/users', component: UserAdminComponent, canActivate: [CanActivateOAuthGuard]},
];
