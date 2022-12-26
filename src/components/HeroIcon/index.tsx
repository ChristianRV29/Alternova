import React, { useContext } from 'react';

import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/Theme';

interface Props {
  name: string;
  onPress: () => void;
}

export const HeroIcon: React.FC<Props> = ({ name, onPress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper onPress={() => onPress()}>
      <Icon name={name} size={30} color={theme.colors.text} />
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
