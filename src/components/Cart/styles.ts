import styled from '@emotion/native';

export const Wrapper = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 35px;
`;

export const QuantityContainer = styled.View`
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

export const Quantity = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
  right: 0;
  top: 0;
`;
