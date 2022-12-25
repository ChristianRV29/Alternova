import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProductsProvider } from '~src/context/Products';

import { ThemeProvider } from '~src/context/Theme';
import { StackNavigator } from '~src/navigation/StackNavigator';

const App = () => {
  return (
    <ProductsProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </ProductsProvider>
  );
};

export default App;
