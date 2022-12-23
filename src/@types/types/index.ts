import { Product, ThemeState } from './../interfaces';

export type ThemeContextProps = {
  theme: ThemeState;
  toggleTheme: () => void;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    product: Product;
  };
};

export type ThemeAction = { type: 'setDarkTheme' } | { type: 'setLightTheme' };
