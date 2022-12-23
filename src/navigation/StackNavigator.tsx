import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Product } from '~src/@types';
import { Details, Home } from '~src/screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    product: Product;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="HomeScreen" component={Home} />
        <Screen name="DetailsScreen" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};
