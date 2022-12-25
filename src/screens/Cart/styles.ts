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
