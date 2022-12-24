/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, FC, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { QuantitySelectorProps } from '~src/@types';
import { ThemeContext } from '~src/context/Theme';
import { QuantityButton, QuantityText, Wrapper } from './styles';

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  min = 0,
  max,
  value,
  onChange,
}) => {
  const { theme } = useContext(ThemeContext);

  const incrementHandler = useCallback(() => onChange(value + 1), [value]);

  const decrementHandler = useCallback(() => onChange(value - 1), [value]);

  return (
    <Wrapper>
      <QuantityButton
        activeOpacity={0.5}
        disabled={value === 0 || value === min}
        onPress={decrementHandler}
        theme={theme}>
        <Icon
          name="remove-circle-outline"
          size={25}
          color={theme.colors.border}
        />
      </QuantityButton>
      <QuantityText>{value}</QuantityText>
      <QuantityButton
        activeOpacity={0.5}
        disabled={value === max}
        onPress={incrementHandler}
        theme={theme}>
        <Icon name="add-circle-outline" size={25} color={theme.colors.border} />
      </QuantityButton>
    </Wrapper>
  );
};
