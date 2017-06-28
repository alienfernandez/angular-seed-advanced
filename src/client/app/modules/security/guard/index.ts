import {CanActivateOAuthGuard} from './oauth.guard';

export const SECURITY_GUARDS: any[] = [
  CanActivateOAuthGuard
];

export * from './oauth.guard';
