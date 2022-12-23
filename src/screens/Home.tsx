/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '@emotion/native';

import { ThemeContext } from '~src/context/Theme';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <HeroTitle theme={theme} style={{ fontFamily: 'Legothick' }}>
          LEGO Store
        </HeroTitle>
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
  border: ${({ theme }) => `3px solid ${theme.colors.notification}`};
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-evenly;
  width: 100%;
`;

const HeroTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  text-shadow: ${({ theme }) => `-1px 0.2px 0.3px ${theme.colors.border}`};
`;
