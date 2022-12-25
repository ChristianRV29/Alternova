import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from '~src/@types/types';
import { Details, Home, Cart, Login } from '~src/screens';
import { ThemeContext } from '~src/context/Theme';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="LoginScreen" component={Login} />
        <Screen name="HomeScreen" component={Home} />
        <Screen name="DetailsScreen" component={Details} />
        <Screen name="CartScreen" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};
