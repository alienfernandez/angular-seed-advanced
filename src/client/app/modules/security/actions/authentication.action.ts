import {Action} from '@ngrx/store';
import {type} from '../../core/utils/index';

/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
export namespace AuthAction {
  // Category to uniquely identify the actions
  export const CATEGORY: string = 'AuthAction';

  /**
   * For each action type in an action group, make a simple
   * enum object for all of this group's action types.
   *
   * The 'type' utility function coerces strings into string
   * literal types and runs a simple check to guarantee all
   * action types in the application are unique.
   */
  export interface IAuthenticationActions {
    INIT_LOGIN: any;
    LOGIN: any;
    LOGIN_FAILED: any;
    SET_CREDENTIALS: any;
  }

  export const ActionTypes: IAuthenticationActions = {
    INIT_LOGIN: type(`[${CATEGORY}] Init Login`),
    LOGIN: type(`[${CATEGORY}] Login`),
    LOGIN_FAILED: type(`[${CATEGORY}] Login Failed`),
    SET_CREDENTIALS: type(`[${CATEGORY}] Set Credentials`),
  };

  /**
   * Every action is comprised of at least a type and an optional
   * payload. Expressing actions as classes enables powerful
   * type checking in reducer functions.
   *
   * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
   */
  export class SetCredentialsAction implements Action {
    type = ActionTypes.SET_CREDENTIALS;

    constructor(public payload: any) {
    }
  }

  export class InitLoginAction implements Action {
    type = ActionTypes.INIT_LOGIN;
    payload: string = null;
  }

  export class LoginAction implements Action {
    type = ActionTypes.LOGIN;

    constructor(public payload: any) {
    }
  }

  export class LoginFailedAction implements Action {
    type = ActionTypes.LOGIN_FAILED;
    // payload: string = null;
    constructor(public payload: string) {
    }
  }

  /**
   * Export a type alias of all actions in this action group
   * so that reducers can easily compose action types
   */
  export type Actions = SetCredentialsAction
    | InitLoginAction
    | LoginAction
    | LoginFailedAction;

}
