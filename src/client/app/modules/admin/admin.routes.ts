import {HomeAdminComponent} from "./components/home/home.component";
import {CanActivateOAuthGuard} from "../security/index";

export const MODULE_ROUTES: Array<any> = [
  {path: '', component: HomeAdminComponent, canActivate: [CanActivateOAuthGuard]},
];
