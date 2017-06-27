import { AuthenticationService } from './authentication.service';
import { OAuthService } from './oauth.service';

export const SECURITY_PROVIDERS: any[] = [
  OAuthService,
  AuthenticationService,
];

export * from './authentication.service';
export * from './oauth.service';
