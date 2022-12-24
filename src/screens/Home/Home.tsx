import React, { useContext } from 'react';
import { FlatList, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '~src/context/Theme';
import { Cart, Toggler, ProductCard } from '~src/components';
import { data } from '~src/data';
import {
  HeaderListContainer,
  HeaderListText,
  HeroContainer,
  LegoLogo,
  ProductsContainer,
  Wrapper,
} from './styles';

const HeaderList = () => {
  return (
    <HeaderListContainer>
      <HeaderListText>Productos disponibles</HeaderListText>
    </HeaderListContainer>
  );
};

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <Wrapper theme={theme} topSpacing={top}>
      <HeroContainer theme={theme}>
        <Toggler />
        <LegoLogo source={require('~src/assets/images/lego.png')} />
        <Cart quantity={5} />
      </HeroContainer>
      <ProductsContainer os={Platform.OS}>
        <FlatList
          data={data.products}
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
