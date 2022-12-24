import styled from '@emotion/native';

export const Wrapper = styled.View<{ topSpacing: number }>`
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

export const HeroContainer = styled.View`
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

export const LegoLogo = styled.Image`
  height: 50px;
  width: 100px;
`;

export const ProductsContainer = styled.View<{ os: string }>`
  display: flex;
  flex-basis: 0;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  padding-bottom: ${({ os }) => (os === 'ios' ? '50px' : '0')};
`;

export const HeaderListContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 25px 0;
`;

export const HeaderListText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
