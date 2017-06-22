import {Observable} from 'rxjs/Observable';
import {ICredentialState, IAuthenticationState, ISecurityState} from '../interfaces/security.interface';

export const initialState: ISecurityState = {
  auth: <IAuthenticationState>{}
};

export function getAuth(state$: Observable<ISecurityState>): Observable<IAuthenticationState> {
  return state$.select(state => state.auth);
}
