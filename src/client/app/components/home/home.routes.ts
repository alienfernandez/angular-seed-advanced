import { HomeComponent } from './home.component';
import {CanActivateOAuthGuard} from "../../modules/security/guard/oauth.can_activate_guard";

export const HomeRoutes: Array<any> = [
  { path: 'home', component: HomeComponent, canActivate : [CanActivateOAuthGuard] }
];
