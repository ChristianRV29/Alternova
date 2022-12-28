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
  margin-bottom: 20px;
`;

export const LegoLogo = styled.Image`
  height: 50px;
  width: 100px;
`;

export const ProductContainer = styled.View`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
`;

export const ImageContainer = styled.View`
  align-items: center;
  background-color: white;
  display: flex;
  height: 150px;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  width: 100%;
`;

export const DetailsContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.notification};
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

export const ProductTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: bold;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductDescription = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
`;

export const ProductStock = styled.Text`
  color: ${({ theme }) => theme.colors.card};
  font-size: 18px;
  font-weight: 400;
`;

export const ProductPrice = styled.Text`
  color: ${({ theme }) => theme.colors.card};
  font-size: 20px;
  font-weight: 700;
`;

export const AddToCartButton = styled.TouchableOpacity`
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  width: 100%;
`;

export const AddToCartText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
`;
