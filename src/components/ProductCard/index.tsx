import React, { useContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Product } from '~src/@types';
import { ThemeContext } from '~src/context/Theme';
import { QuantitySelector } from '~src/components';
import {
  AddToCartButton,
  AddToCartText,
  DescriptionContainer,
  DetailsContainer,
  DetailText,
  ImageContainer,
  ProductImage,
  ProductTitle,
  TouchableStyled,
  Wrapper,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductsContext } from '~src/context/Products';

import { RootStackParamList } from '~src/@types';
import { StyleSheet } from 'react-native';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  const { addProductCart } = useContext(ProductsContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [quantity, setQuantity] = useState<number>(0);

  const addProduct = () => {
    setQuantity(0);
    addProductCart(product, quantity);
  };

  const onPressCard = () => {
    navigation.navigate('DetailsScreen', {
      product,
    });
  };

  return (
    <TouchableStyled activeOpacity={0.9} onPress={onPressCard}>
      <Wrapper theme={theme}>
        <ImageContainer theme={theme}>
          <ProductImage
            resizeMode="contain"
            source={{ uri: product.image }}
            theme={theme}
          />
        </ImageContainer>
        <DescriptionContainer>
          <ProductTitle>{product.name}</ProductTitle>
          <DetailsContainer>
            <DetailText>{`Disponibles: ${product.stock}`}</DetailText>
            <DetailText>{`$${product.unit_price}`}</DetailText>
          </DetailsContainer>
          <QuantitySelector
            max={product.stock}
            min={0}
            onChange={it => setQuantity(it)}
            value={quantity}
          />
          {quantity > 0 && (
            <AddToCartButton
              activeOpacity={0.8}
              theme={theme}
              onPress={() => addProduct()}>
              <AddToCartText theme={theme}>Añadir</AddToCartText>
              <Icon name="cart-outline" size={20} color={theme.colors.text} />
            </AddToCartButton>
          )}
        </DescriptionContainer>
      </Wrapper>
    </TouchableStyled>
  );
};
