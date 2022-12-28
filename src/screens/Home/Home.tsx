import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '~src/context/Theme';
import { CartIcon, ProductCard, HeroIcon } from '~src/components';
import { ProductsContext } from '~src/context/Products';
import {
  HeaderListContainer,
  HeaderListText,
  HeroContainer,
  LegoLogo,
  LoadingContainer,
  ProductsContainer,
  Wrapper,
} from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~src/@types';
import { AuthContext } from '~src/context';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HeaderList = () => {
  return (
    <HeaderListContainer>
      <HeaderListText>Productos disponibles</HeaderListText>
    </HeaderListContainer>
  );
};
export const Home = ({ navigation }: HomeScreenProps) => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  const { products, productsCart, isFetching } = useContext(ProductsContext);
  const { logOut } = useContext(AuthContext);

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <HeroIcon name="exit-outline" onPress={logOut} />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <CartIcon
          quantity={productsCart.length}
          onPress={() => navigation.navigate('CartScreen')}
        />
      </HeroContainer>
      {isFetching ? (
        <LoadingContainer>
          <ActivityIndicator size={50} color={theme.colors.text} />
        </LoadingContainer>
      ) : (
        <ProductsContainer os={Platform.OS}>
          <FlatList
            data={products}
            keyExtractor={item => item.name}
            ListHeaderComponent={() => <HeaderList />}
            numColumns={2}
            renderItem={({ item }) => <ProductCard product={item} />}
            showsVerticalScrollIndicator={false}
          />
        </ProductsContainer>
      )}
    </Wrapper>
  );
};
