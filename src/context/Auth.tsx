import React, { createContext, useEffect, useReducer } from 'react';

import auth from '@react-native-firebase/auth';

import { AuthContextProps, AuthState } from '~src/@types';
import { AuthReducer } from '~src/hooks';
import { UserData } from '~src/@types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  errorMessage: null,
  status: 'not-authenticated',
  user: null,
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  useEffect(() => {
    checkUserId();
  }, []);

  const checkUserId = async () => {
    try {
      const userId = await AsyncStorage.getItem('@user_id');

      if (userId) {
        dispatch({
          type: 'SignUp',
          payload: {
            user: {
              isAnonymous: true,
              email: null,
              uid: userId,
            },
          },
        });
      } else {
        dispatch({ type: 'Logout' });
      }
    } catch (err) {
      dispatch({ type: 'Logout' });
    }
  };

  const signUp = ({ email, password }: UserData) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async data => {
        const { user } = data;
        dispatch({
          type: 'SignUp',
          payload: {
            user,
          },
        });

        await AsyncStorage.setItem('@user_id', user.uid);
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
      .then(async data => {
        const { user } = data;
        dispatch({
          type: 'SignUp',
          payload: {
            user: user,
          },
        });
        await AsyncStorage.setItem('@user_id', user.uid);
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

  const logOut = async () => {
    dispatch({ type: 'Logout' });
    await AsyncStorage.removeItem('@user_id');
  };

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
