import { Product, ProductCart, ThemeState } from './../interfaces';

export type ThemeContextProps = {
  theme: ThemeState;
  toggleTheme: () => void;
};

export type ProductContextProps = {
  products: Array<Product>;
  productsCart: Array<ProductCart>;
  addProductCart: (product: Product, quantity: number) => void;
  removeProductCart: (id: number) => void;
  buyProducts: () => void;
};

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen: {
    product: Product;
  };
  CartScreen: undefined;
};

export type ThemeAction = { type: 'setDarkTheme' } | { type: 'setLightTheme' };
