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

export interface OAuth2Token {
  access_token: string,
  refresh_token?: string,
  expires_in?: number,
  scope?: string,
  token_type?: string
}

/**
 * Interface for authentication state
 */
export interface IAuthenticationState {
  credentials: ICredentialState,
  token?: string|OAuth2Token,
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

export interface IAuthService {
  signIn(credentials: any, uri: string)

  logout()
}

export interface IAuthenticationProvider {
  authenticate(credentials: any)

  getCredentials()

}
