import React, { useContext, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from '@emotion/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ProductsContext, ThemeContext } from '~src/context';
import { CartIcon, HeroIcon, QuantitySelector, Toggler } from '~src/components';
import { RootStackParamList } from '~src/@types';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

export const Details = ({ navigation, route }: DetailsScreenProps) => {
  const { product } = route.params;

  const { top } = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  const { productsCart, addProductCart } = useContext(ProductsContext);

  const [quantity, setQuantity] = useState<number>(1);

  const addProduct = () => {
    addProductCart(product, quantity);
    navigation.navigate('CartScreen');
  };

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <HeroIcon
          name="arrow-back-circle-outline"
          onPress={() => navigation.goBack()}
        />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <CartIcon
          quantity={productsCart.length}
          onPress={() => navigation.navigate('CartScreen')}
        />
      </HeroContainer>
      <ProductContainer>
        <ImageContainer>
          <ProductImage source={{ uri: product.image }} resizeMode="contain" />
        </ImageContainer>
        <DetailsContainer theme={theme}>
          <ProductTitle theme={theme}>{product.name}</ProductTitle>
          <ProductStock
            theme={theme}>{`Existencias: ${product.stock}`}</ProductStock>
          <ProductPrice theme={theme}>
            {`TOTAL: ${product.unit_price * quantity}`}
          </ProductPrice>
          <QuantitySelector
            max={product.stock}
            value={quantity}
            onChange={it => setQuantity(it)}
          />
          {quantity > 0 && (
            <AddToCartButton
              activeOpacity={0.8}
              theme={theme}
              onPress={() => addProduct()}>
              <AddToCartText theme={theme}>Añadir</AddToCartText>
              <Icon
                name="cart-outline"
                size={20}
                color={theme.colors.primary}
              />
            </AddToCartButton>
          )}
        </DetailsContainer>
      </ProductContainer>
    </Wrapper>
  );
};

export const Wrapper = styled.View<{ topSpacing: number }>`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
  top: ${({ topSpacing }) => `${topSpacing}px`};
`;

export const HeroContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 25px 0 25px 0;
  border: ${({ theme }) => `3px solid ${theme.colors.border}`};
  display: flex;
  flex-direction: row;
  height: 75px;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const LegoLogo = styled.Image`
  height: 50px;
  width: 100px;
`;

export const ProductContainer = styled.View`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
`;

export const ImageContainer = styled.View`
  align-items: center;
  background-color: white;
  display: flex;
  height: 150px;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  width: 100%;
`;

export const DetailsContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.notification};
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

export const ProductTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductStock = styled.Text`
  color: ${({ theme }) => theme.colors.card};
  font-size: 18px;
  font-weight: 400;
`;

export const ProductPrice = styled.Text`
  color: ${({ theme }) => theme.colors.card};
  font-size: 20px;
  font-weight: 700;
`;

export const AddToCartButton = styled.TouchableOpacity`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  width: 100%;
`;

export const AddToCartText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
`;
