import styled from '@emotion/native';

export const Wrapper = styled.View<{ topSpacing: number }>`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  padding: 10px;
  top: ${({ topSpacing }) => `${topSpacing}px`};
`;

export const EmptyCartContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  font-weight: 300;
`;

export const NavigationButton = styled.TouchableOpacity`
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 150px;
  margin: 15px 0;
  border-radius: 20px;
`;

export const ProductsContainer = styled.View`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  padding-bottom: 80px;
`;

export const BuyButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  display: flex;
  flex-direction: row;
  height: 50px;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const BuyText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;
