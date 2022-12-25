import React, { FC, useContext } from 'react';
import { Text } from 'react-native';

import { ProductCart } from '~src/@types';
import { ThemeContext } from '~src/context';
import { Wrapper } from './style';

type Props = {
  product: ProductCart;
};

export const CartCard: FC<Props> = ({ product }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <Text>{product.description}</Text>
    </Wrapper>
  );
};
