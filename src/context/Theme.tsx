import React, { createContext, useReducer } from 'react';
import { Appearance } from 'react-native';

import { Theme, ThemeContextProps } from '~src/@types';
import { darkTheme, lightTheme } from '~src/constants';
import { ThemeReducer } from '~src/hooks';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(
    ThemeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  const toggleTheme = () =>
    theme.dark
      ? dispatch({ type: Theme.LIGHT })
      : dispatch({ type: Theme.DARK });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
