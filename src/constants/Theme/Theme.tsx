import { ThemeState } from '~src/@types';

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '',
  colors: {
    background: '#550e05',
    border: '#9b9b11',
    card: '#9b9695',
    notification: '',
    primary: '#787878',
    text: '#FFF',
  },
};
export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: '',
  colors: {
    background: '#c61e08',
    border: '#000000',
    card: '#ffffff6f',
    notification: '#F6ec36',
    primary: '#FFFF',
    text: '#ffffff',
  },
};
