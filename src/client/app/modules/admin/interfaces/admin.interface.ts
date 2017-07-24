
// export interface IQueryInput {
//   page?: number;
//   perPage?: number;
//   dateFrom?: string;
//   dateTo?: string;
//   isRead?: string;
// }


/**
 * Interface for user state
 */
export interface IUserState {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profileImageURL?: string;
  createdAt?: any;
  updatedAt?: any;
}

/**
 * Interface for admin state
 */
export interface IAdminState {
  users: Array<IUserState>,
}
