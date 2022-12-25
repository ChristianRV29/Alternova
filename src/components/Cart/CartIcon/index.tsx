import React, { useContext } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/Theme';
import { Quantity, QuantityContainer, Wrapper } from './styles';

interface Props {
  quantity: number;
  onPress: () => void;
}

export const CartIcon: React.FC<Props> = ({ quantity, onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper activeOpacity={0.8} onPress={onPress}>
      <Icon name="cart-outline" size={30} color={theme.colors.text} />
      {quantity > 0 && (
        <QuantityContainer theme={theme}>
          <Quantity>{quantity}</Quantity>
        </QuantityContainer>
      )}
    </Wrapper>
  );
};
