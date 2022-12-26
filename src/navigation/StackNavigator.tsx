import React, { Fragment, useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from '~src/@types/types';
import { Details, Home, Cart, Login, Register } from '~src/screens';
import { ThemeContext } from '~src/context/Theme';
import { AuthContext } from '~src/context';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);
  const { status } = useContext(AuthContext);
  return (
    <NavigationContainer theme={theme}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {status !== 'authenticated' ? (
          <Fragment>
            <Screen name="LoginScreen" component={Login} />
            <Screen name="RegisterScreen" component={Register} />
          </Fragment>
        ) : (
          <Fragment>
            <Screen name="HomeScreen" component={Home} />
            <Screen name="DetailsScreen" component={Details} />
            <Screen name="CartScreen" component={Cart} />
          </Fragment>
        )}
      </Navigator>
    </NavigationContainer>
  );
};
