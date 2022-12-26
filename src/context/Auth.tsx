import React, { createContext, useReducer } from 'react';

import auth from '@react-native-firebase/auth';

import { AuthContextProps, AuthState } from '~src/@types';
import { AuthReducer } from '~src/hooks';
import { UserData } from '~src/@types/types';

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  errorMessage: null,
  status: 'not-authenticated',
  user: null,
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  const signUp = ({ email, password }: UserData) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        const { user } = data;
        dispatch({
          type: 'SignUp',
          payload: {
            user,
          },
        });
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          dispatch({
            type: 'AddError',
            payload: {
              errorMessage: 'The email is already in use!',
            },
          });
        }
        if (err.code === 'auth/invalid-email') {
          dispatch({
            type: 'AddError',
            payload: {
              errorMessage: 'The email is not valid. Try again!',
            },
          });
        }
      });
  };

  const signIn = ({ email, password }: UserData) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        dispatch({
          type: 'SignUp',
          payload: {
            user: data.user,
          },
        });
      })
      .catch(() =>
        dispatch({
          type: 'AddError',
          payload: {
            errorMessage: 'Wrong credentials!',
          },
        }),
      );
  };

  const removeError = () => dispatch({ type: 'RemoveError' });

  const logOut = () => dispatch({ type: 'Logout' });

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logOut,
        removeError,
        signIn,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
