import React, { useContext } from 'react';
import { FlatList, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '~src/context/Theme';
import { CartIcon, Toggler, ProductCard } from '~src/components';
import { ProductsContext } from '~src/context/Products';
import {
  HeaderListContainer,
  HeaderListText,
  HeroContainer,
  LegoLogo,
  ProductsContainer,
  Wrapper,
} from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~src/@types';

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
  const { products, productsCart } = useContext(ProductsContext);

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <Toggler />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <CartIcon
          quantity={productsCart.length}
          onPress={() => navigation.navigate('CartScreen')}
        />
      </HeroContainer>
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
    </Wrapper>
  );
};
