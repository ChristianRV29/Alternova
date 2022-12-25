import styled from '@emotion/native';

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px 0 20px 0;
  border: ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

export const ImageContainer = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 60px;
  height: 120px;
  justify-content: center;
  width: 120px;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  justify-content: space-between;
`;

export const ProductTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: bold;
`;

export const ProductDescription = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 400;
`;

export const ProductQuantity = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.border};
`;

export const DeleteProduct = styled.TouchableOpacity`
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
`;
