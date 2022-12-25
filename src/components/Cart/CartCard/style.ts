import styled from '@emotion/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px 0 20px 0;
  border: ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: row;
  height: 150px;
  margin: 10px 0;
  width: 100%;
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
