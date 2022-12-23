import { ThemeState } from '~src/@types';

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '',
  colors: {
    background: '#7f131b',
    border: '#ffffff',
    card: '#1a7f8b',
    notification: '#F6ec36',
    primary: '#FFFF',
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
    card: '#9fd2d3',
    notification: '#000000',
    primary: '#000000',
    text: '#000000',
  },
};
