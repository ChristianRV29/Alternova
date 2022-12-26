import { AuthAction, AuthState } from '~src/@types';

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'SignUp':
      return {
        user: action.payload.user,
        errorMessage: null,
        status: 'authenticated',
      };
    case 'AddError':
      return {
        user: null,
        errorMessage: action.payload.errorMessage,
        status: 'not-authenticated',
      };

    case 'RemoveError':
      return { ...state, errorMessage: null };

    case 'Logout':
      return { user: null, errorMessage: null, status: 'not-authenticated' };

    default:
      return state;
  }
};
