import {BasicAuthProvider} from './basic-authentication-provider';
import {OAuthAuthProvider} from './oauth2-authentication-provider';
import {AuthProviderManager} from './authentication-manager.service';
import {AuthenticationProvider} from './authentication-provider';
import {SecurityService} from "./security.service";


export const SECURITY_PROVIDERS: any[] = [
  OAuthAuthProvider,
  BasicAuthProvider,
  SecurityService,
  {
    provide: AuthProviderManager,
    useFactory: (authProvider: AuthenticationProvider) => new AuthProviderManager(authProvider),
    deps: [AuthenticationProvider]
  },
  {provide: AuthenticationProvider, useClass: OAuthAuthProvider}
  // AuthProviderManager,
];

export * from './basic-authentication-provider';
export * from './oauth2-authentication-provider';
export * from './authentication-manager.service';
export * from './security.service';
