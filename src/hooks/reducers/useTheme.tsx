import { ThemeAction, ThemeState } from '~src/@types';
import { darkTheme, lightTheme } from '~src/constants';

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'setDarkTheme':
      return { ...darkTheme };

    case 'setLightTheme':
      return { ...lightTheme };

    default:
      return state;
  }
};
