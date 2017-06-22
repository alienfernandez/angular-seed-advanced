// module
import {ICredentialState, ISecurityState, ILoginFailed, initialState} from '../index';
import {AuthAction} from '../actions/authentication.action';
import * as _ from 'lodash';

export function reducer(state: ISecurityState = initialState,
                        action: AuthAction.Actions): ISecurityState {
  switch (action.type) {
    case AuthAction.ActionTypes.SET_CREDENTIALS:
      //Setting credentials to ISecurityState
      return (<any>Object).assign({}, (!_.isEmpty(state)) ? state : {}, {auth: action.payload});
    case AuthAction.ActionTypes.LOGIN_FAILED:
      return (<any>Object).assign({}, {
        auth: {
          credentials: null,
          failed: <ILoginFailed>{error: action.payload}
        }
      });
    default:
      return state;
  }
}
