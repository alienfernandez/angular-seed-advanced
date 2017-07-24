// module
import {IUserState, IAdminState, initialState} from '../index';
import {UserAction} from '../actions/user.action';
import * as _ from 'lodash';

export function reducer(state: IAdminState = initialState,
                        action: UserAction.Actions): IAdminState {
  switch (action.type) {
    case UserAction.ActionTypes.SET_USERS:
      //Setting users to IAdminState
      console.log('action.payload', action.payload);
      return (<any>Object).assign({}, (!_.isEmpty(state)) ? state : {}, {users: action.payload});
    case UserAction.ActionTypes.USER_FAILED:
      // return (<any>Object).assign({}, {
      //   users: {}
      // });
    default:
      return state;
  }
}
