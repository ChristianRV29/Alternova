import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ProductsContext, ThemeContext } from '~src/context';
import { CartIcon, HeroIcon, QuantitySelector } from '~src/components';
import { RootStackParamList } from '~src/@types';
import {
  AddToCartButton,
  AddToCartText,
  DetailsContainer,
  HeroContainer,
  ImageContainer,
  LegoLogo,
  ProductContainer,
  ProductImage,
  ProductPrice,
  ProductStock,
  ProductDescription,
  ProductTitle,
  Wrapper,
} from './styles';
import { useProductsDetails } from '~src/hooks/useProductDetails';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

export const Details = ({ navigation, route }: DetailsScreenProps) => {
  const { product: productRoute } = route.params;

  const { product, isFetching } = useProductsDetails(productRoute.id);

  const { top } = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  const { productsCart, addProductCart } = useContext(ProductsContext);

  const [quantity, setQuantity] = useState<number>(1);

  const addProduct = () => {
    addProductCart(productRoute, quantity);
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
      {isFetching ? (
        <ProductContainer>
          <ActivityIndicator size={50} color={theme.colors.text} />
        </ProductContainer>
      ) : (
        <ProductContainer>
          <ImageContainer>
            <ProductImage
              source={{ uri: product.image }}
              resizeMode="contain"
            />
          </ImageContainer>
          <DetailsContainer theme={theme}>
            <ProductTitle theme={theme}>{product.name}</ProductTitle>
            <ProductDescription theme={theme}>
              {product.description}
            </ProductDescription>
            <ProductStock
              theme={
                theme
              }>{`Existencias: ${productRoute.stock}`}</ProductStock>
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
      )}
    </Wrapper>
  );
};
