/**
 * Interface for credential state
 */
export interface ICredentialState {
  id: number;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  username: string;
  profileImageURL?: string;
  createdAt?: any;
  updatedAt?: any;
}

/**
 * Interface for role state
 */
export interface IRoleState {
  name: string,
  description?: string
}

export interface ILoginFailed {
  error: string,
  code?: string
}

/**
 * Interface for authentication state
 */
export interface IAuthenticationState {
  credentials: ICredentialState,
  token?: string,
  isLoggedIn?: boolean,
  isAdmin?: boolean,
  redirectTo?: string,
  roles?: Array<IRoleState>,
  failed?: ILoginFailed
}


/**
 * Interface for security state
 */
export interface ISecurityState {
  auth: IAuthenticationState
}
