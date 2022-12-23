import React, { useContext, useEffect, useState } from 'react';

import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/Theme';

export const Toggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [iconName, setIconName] = useState<string>(
    theme.dark ? 'sunny-outline' : 'moon-outline',
  );

  useEffect(() => {
    setIconName(theme.dark ? 'sunny-outline' : 'moon-outline');
  }, [theme]);

  return (
    <Wrapper onPress={() => toggleTheme()}>
      <Icon name={iconName} size={30} color={theme.colors.text} />
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
