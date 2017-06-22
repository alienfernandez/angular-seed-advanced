import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationComponent} from './authentication/authentication.component';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  AuthenticationComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from './authentication/authentication.component';
