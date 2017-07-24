import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ngx-resource';
import {RequestMethod} from '@angular/http';
import {Config} from '../../core/index';
import {AuthGuardResource} from '../../core/services/auth.guard.resource';

export interface IQueryInput {
  page?: number;
  perPage?: number;
  dateFrom?: string;
  dateTo?: string;
  isRead?: string;
}

export interface IUserShort {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUser extends IUserShort {
  is_active?: boolean;
}

@Injectable()
@ResourceParams({
  url: Config.ENVIRONMENT().API + '/api/users',
  removeTrailingSlash: false,
})
export class UserResource extends AuthGuardResource {

  @ResourceAction({
    isArray: true,
    path: '/',
    skipDataCleaning: false,
  })
  query: ResourceMethod<IQueryInput, IUserShort[]>;

  @ResourceAction({
    path: '/{!id}'
  })
  get: ResourceMethod<{id: any}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  save: ResourceMethod<IUser, IUser>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: '/{!id}'
  })
  update: ResourceMethod<IUser, IUser>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: '/{!id}'
  })
  remove: ResourceMethod<{id: any}, any>;

  // Alias to save
  create(data: IUser, callback?: (res: IUser) => any): IUser {
    return this.save(data, callback);
  }

}
