import styled from '@emotion/native';

export const Shape = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  height: 1200px;
  position: absolute;
  top: -250px;
  transform: rotate(50deg);
  width: 1500px;
`;
