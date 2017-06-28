import {HomeComponent} from './home.component';
import {CanActivateOAuthGuard} from "../../modules/security/index";

export const HomeRoutes: Array<any> = [
  {path: 'home', component: HomeComponent, canActivate: [CanActivateOAuthGuard]}
];
