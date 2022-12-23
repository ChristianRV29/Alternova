import { Theme } from '@react-navigation/native';
export interface Product {
  name: string;
  unit_price: number;
  stock: number;
  description: string;
  image: string;
}
export interface ThemeState extends Theme {
  currentTheme: 'Dark' | 'Light';
  dividerColor: string;
}
