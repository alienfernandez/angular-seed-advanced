import {CanActivateOAuthGuard} from './oauth.can_activate_guard';

export const SECURITY_GUARDS: any[] = [
  CanActivateOAuthGuard
];

export * from './oauth.can_activate_guard';
