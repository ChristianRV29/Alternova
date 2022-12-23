import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '~src/context/Theme';
import { StackNavigator } from '~src/navigation/StackNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
