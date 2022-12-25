import React, { FC, useContext } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { ProductCart } from '~src/@types';
import { ProductsContext, ThemeContext } from '~src/context';
import {
  ImageContainer,
  ProductImage,
  Wrapper,
  DescriptionContainer,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  DeleteProduct,
} from './style';

type Props = {
  product: ProductCart;
};

export const CartCard: FC<Props> = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  const { removeProductCart } = useContext(ProductsContext);

  return (
    <Wrapper theme={theme}>
      <ImageContainer>
        <ProductImage source={{ uri: product.image }} resizeMode="contain" />
      </ImageContainer>
      <DescriptionContainer>
        <ProductTitle theme={theme}>{product.name}</ProductTitle>
        <ProductDescription theme={theme}>
          {`Cantidad: ${product.quantity}`}
        </ProductDescription>
        <ProductDescription theme={theme}>
          {`Precio unitario: ${product.unit_price}`}
        </ProductDescription>
        <ProductPrice theme={theme}>{`Subtotal: ${
          product.quantity * product.unit_price
        }`}</ProductPrice>
      </DescriptionContainer>
      <DeleteProduct onPress={() => removeProductCart(product.id)}>
        <Icon name="trash-outline" size={20} color={theme.colors.text} />
      </DeleteProduct>
    </Wrapper>
  );
};
