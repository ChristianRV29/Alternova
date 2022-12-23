import React, { useContext } from 'react';

import styled from '@emotion/native';
import { ThemeContext } from '~src/context/Theme';
import { Text } from 'react-native';

export const Toggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} activeOpacity={0.8} onPress={() => toggleTheme()}>
      <Text>Theme</Text>
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
