import React, { useContext } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/Theme';
import { Quantity, QuantityContainer, Wrapper } from './styles';

interface Props {
  quantity: number;
}

export const Cart: React.FC<Props> = ({ quantity }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper
      activeOpacity={0.8}
      onPress={() => console.log('Go cart shopping')}>
      <Icon name="cart-outline" size={30} color={theme.colors.text} />
      <QuantityContainer theme={theme}>
        <Quantity>{quantity}</Quantity>
      </QuantityContainer>
    </Wrapper>
  );
};
