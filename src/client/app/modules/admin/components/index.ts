import {HomeAdminComponent} from './home/home.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarAdminComponent} from './navbar/navbar-admin.component';
import {UserAdminComponent} from './user/user.component';
import {FooterAdminComponent} from './footer/footer-admin.component';

export const MODULE_COMPONENTS: any[] = [
  HomeAdminComponent,
  UserAdminComponent,
  SidebarComponent,
  NavbarAdminComponent,
  FooterAdminComponent,
];

export * from './home/home.component';
export * from './user/user.component';
export * from './sidebar/sidebar.component';
export * from './navbar/navbar-admin.component';
export * from './footer/footer-admin.component';
