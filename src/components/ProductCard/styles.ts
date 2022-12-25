import styled from '@emotion/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  border: ${({ theme }) => `2px solid ${theme.colors.border}`};
  display: flex;
  flex-direction: column;
  height: 200px;
  margin: 10px 10px 25px 10px;
  width: 45%;
`;

export const ImageContainer = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
`;

export const ProductImage = styled.Image`
  background-color: white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  margin-top: 25px;
  padding: 5px;
  width: 100%;
`;

export const DetailsContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DetailText = styled.Text`
  color: white;
  font-size: 15px;
  margin: 0 5px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.notification};
  border-radius: 10px;
  border: ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  width: 100%;
`;

export const AddToCartText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 300;
  margin-right: 5px;
`;
