import { ThemeState } from '~src/@types';

export const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: '',
  colors: {
    background: '#550e05',
    border: '#9b9b11',
    card: '',
    notification: '',
    primary: '',
    text: '',
  },
};
export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: '',
  colors: {
    background: '#c61e08',
    border: '#ffff3d',
    card: '',
    notification: '',
    primary: '',
    text: '',
  },
};
