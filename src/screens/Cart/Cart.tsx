import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '~src/@types';
import { Toggler, CartCard } from '~src/components';
import { ProductsContext, ThemeContext } from '~src/context';
import { HeroContainer, LegoLogo } from './../Home/styles';
import {
  Wrapper,
  EmptyCartContainer,
  EmptyCartText,
  NavigationButton,
  BuyButton,
  BuyText,
  ProductsContainer,
} from './styles';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'CartScreen'>;

export const Cart = ({ navigation }: CartScreenProps) => {
  const { productsCart, buyProducts } = useContext(ProductsContext);
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
        <ProductsContainer>
          <FlatList
            data={productsCart}
            keyExtractor={it => it.name}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CartCard product={item} />}
          />
          <BuyButton theme={theme} onPress={() => buyProducts()}>
            <BuyText theme={theme}>Comprar</BuyText>
            <Icon name="card-outline" size={20} color={theme.colors.text} />
          </BuyButton>
        </ProductsContainer>
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
