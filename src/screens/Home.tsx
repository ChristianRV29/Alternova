import React, { useContext } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

import { ThemeContext } from '~src/context/Theme';
import { Cart, Toggler } from '~src/components';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <Toggler />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <Cart />
      </HeroContainer>
    </Wrapper>
  );
};

const Wrapper = styled.View<{ topSpacing: number }>`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
  top: ${({ topSpacing }) => `${topSpacing}px`};
`;

const HeroContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 25px 0 25px 0;
  border: ${({ theme }) => `3px solid ${theme.colors.border}`};
  display: flex;
  flex-direction: row;
  height: 75px;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`;

const LegoLogo = styled.Image`
  height: 50px;
  width: 100px;
`;
