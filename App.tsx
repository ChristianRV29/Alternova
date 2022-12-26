import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, ProductsProvider, ThemeProvider } from '~src/context';

import { StackNavigator } from '~src/navigation/StackNavigator';

const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <StackNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
