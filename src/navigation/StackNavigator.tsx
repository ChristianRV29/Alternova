import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from '~src/@types/types';
import { Details, Home } from '~src/screens';

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
