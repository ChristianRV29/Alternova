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
  isFetching: boolean;
};

export type Status = 'checking' | 'authenticated' | 'not-authenticated';

export type UserData = {
  email: string;
  password: string;
};

type SignUp = {
  readonly type: 'SignUp';
  payload: {
    user: User;
  };
};

type AddError = {
  readonly type: 'AddError';
  payload: {
    errorMessage: string;
  };
};

type Logout = {
  readonly type: 'Logout';
};

type RemoveError = {
  readonly type: 'RemoveError';
};

export type AuthAction = SignUp | AddError | Logout | RemoveError;

export type User = {
  email: string | null;
  isAnonymous: boolean;
  uid: string;
};

export type AuthState = {
  errorMessage: string | null;
  status: Status;
  user: User | null;
};

export type AuthContextProps = {
  errorMessage: string | null;
  logOut: () => void;
  removeError: () => void;
  signIn: (data: UserData) => void;
  signUp: (data: UserData) => void;
  status: Status;
  user: User | null;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  DetailsScreen: {
    product: Product;
  };
  CartScreen: undefined;
};

export type ThemeAction = { type: 'setDarkTheme' } | { type: 'setLightTheme' };
