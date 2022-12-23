import React, { useContext, useEffect, useState } from 'react';

import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/Theme';

export const Cart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper
      activeOpacity={0.8}
      onPress={() => console.log('Go cart shopping')}>
      <Icon name="cart-outline" size={30} color={theme.colors.text} />
      <QuantityContainer theme={theme}>
        <Quantity>2</Quantity>
      </QuantityContainer>
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 35px;
`;

const QuantityContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  border: ${({ theme }) => `2px solid ${theme.colors.border}`};
  display: flex;
  height: 18px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
`;

const Quantity = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
  right: 0;
  top: 0;
`;
