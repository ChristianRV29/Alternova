import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from '~src/@types';

import { Toggler, CartCard } from '~src/components';
import {
  EmptyCartContainer,
  EmptyCartText,
  NavigationButton,
} from '~src/components/Cart/CartCard/style';

import { ProductsContext, ThemeContext } from '~src/context';
import { HeroContainer, LegoLogo } from './../Home/styles';
import { Wrapper } from './styles';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'CartScreen'>;

export const Cart = ({ navigation }: CartScreenProps) => {
  const { productsCart } = useContext(ProductsContext);
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <Wrapper topSpacing={top} theme={theme}>
      <HeroContainer theme={theme}>
        <Toggler />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="home-outline" size={30} color={theme.colors.text} />
        </TouchableOpacity>
      </HeroContainer>
      {productsCart.length > 0 ? (
        <FlatList
          data={productsCart}
          keyExtractor={it => it.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CartCard product={item} />}
        />
      ) : (
        <EmptyCartContainer>
          <EmptyCartText>
            No tienes productos aún. Ve a por ellos!
          </EmptyCartText>
          <NavigationButton
            theme={theme}
            onPress={() => navigation.navigate('HomeScreen')}>
            <EmptyCartText>Ir a la tienda</EmptyCartText>
          </NavigationButton>
        </EmptyCartContainer>
      )}
    </Wrapper>
  );
};
