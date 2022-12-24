import React, { useContext, useState } from 'react';

import { Product } from '~src/@types';
import { ThemeContext } from '~src/context/Theme';
import { QuantitySelector } from '~src/components';
import {
  AddToCartButton,
  AddToCartText,
  DescriptionContainer,
  ImageContainer,
  PriceText,
  ProductImage,
  Wrapper,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  const [quantity, setQuantity] = useState<number>(0);
  return (
    <Wrapper theme={theme}>
      <ImageContainer theme={theme}>
        <ProductImage
          resizeMode="contain"
          source={{ uri: product.image }}
          theme={theme}
        />
      </ImageContainer>
      <DescriptionContainer>
        <PriceText>{`$${product.unit_price}`}</PriceText>
        <QuantitySelector
          max={product.stock}
          min={0}
          onChange={it => setQuantity(it)}
          value={quantity}
        />
        {quantity > 0 && (
          <AddToCartButton activeOpacity={0.8} theme={theme}>
            <AddToCartText theme={theme}>Añadir</AddToCartText>
            <Icon name="cart-outline" size={20} color={theme.colors.text} />
          </AddToCartButton>
        )}
      </DescriptionContainer>
    </Wrapper>
  );
};
