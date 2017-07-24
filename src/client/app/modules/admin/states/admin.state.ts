import {Observable} from 'rxjs/Observable';
import {IUserState, IAdminState} from '../interfaces/admin.interface';

export const initialState: IAdminState = {
  users: <IUserState[]>[]
};

export function getUsers(state$: Observable<IAdminState>): Observable<IUserState[]> {
  return state$.select(state => state.users);
}
