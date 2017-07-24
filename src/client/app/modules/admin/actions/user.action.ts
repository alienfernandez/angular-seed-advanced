import {Action} from '@ngrx/store';
import {type} from '../../core/utils/index';

/**
 * Each action should be namespaced
 * this allows the interior to have similar typed names as other actions
 * however still allow index exports
 */
export namespace UserAction {
  // Category to uniquely identify the actions
  export const CATEGORY: string = 'UserAction';

  /**
   * For each action type in an action group, make a simple
   * enum object for all of this group's action types.
   *
   * The 'type' utility function coerces strings into string
   * literal types and runs a simple check to guarantee all
   * action types in the application are unique.
   */
  export interface IUserAction {
    GET_USERS: any;
    SET_USERS: any;
    USER_FAILED: any;
  }

  export const ActionTypes: IUserAction = {
    GET_USERS: type(`[${CATEGORY}] Get Users`),
    SET_USERS: type(`[${CATEGORY}] Set Users`),
    USER_FAILED: type(`[${CATEGORY}] Failed to Get Users`),
  };

  /**
   * Every action is comprised of at least a type and an optional
   * payload. Expressing actions as classes enables powerful
   * type checking in reducer functions.
   *
   * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
   */
  export class GetUsersAction implements Action {
    type = ActionTypes.GET_USERS;

    constructor(public payload: any) {
    }
  }

  export class SetUsersAction implements Action {
    type = ActionTypes.SET_USERS;

    constructor(public payload: any) {
    }
  }

  export class UserFailedAction implements Action {
    type = ActionTypes.USER_FAILED;
    // payload: string = null;
    constructor(public payload: string) {
    }
  }


  /**
   * Export a type alias of all actions in this action group
   * so that reducers can easily compose action types
   */
  export type Actions = GetUsersAction | UserFailedAction | SetUsersAction;

}
