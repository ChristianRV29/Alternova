import styled from '@emotion/native';

export const Wrapper = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 50px;
  justify-content: space-evenly;
  width: 100%;
`;

export const QuantityButton = styled.TouchableOpacity<{ disabled: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0 10px 0 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  display: flex;
  height: 30px;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  width: 40px;
`;

export const QuantityText = styled.Text`
  color: white;
  font-size: 18px;
`;
