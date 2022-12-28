import { ThemeState } from '~src/@types';

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '',
  colors: {
    background: '#7f131b',
    border: '#ffffff',
    card: '#1E5AA8',
    notification: '#aeb441',
    primary: '#628026',
    text: '#ffffff',
  },
};
export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: '',
  colors: {
    background: '#c61e08',
    border: '#F6ec36',
    card: '#9dc3f7',
    notification: '#73f491',
    primary: '#9aca3a',
    text: '#122d19',
  },
};
