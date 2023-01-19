/* eslint-disable curly */
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Product, ProductCart, ProductContextProps } from '~src/@types';
import { fetchProducts } from '~src/utils';
import burnedData from '~src/data/data.json';

export const ProductsContext = createContext({} as ProductContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [productsApp, setProductsApp] = useState<Array<Product>>([]);
  const [productsCart, setProductsCart] = useState<Array<ProductCart>>([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = () => {
    fetchProducts()
      .then(resp => {
        const { data } = resp;
        if (data && data.length > 0) {
          const availableProducts = data.filter(it => it.stock > 0);
          setProductsApp(availableProducts);
        }
      })
      .catch(() => {
        const availableProducts = burnedData.products.filter(
          it => it.stock > 0,
        );
        setProductsApp(availableProducts);
      })
      .finally(() => setIsFetching(false));
  };

  const addProductCart = (newProduct: Product, quantity: number) => {
    const product = productsApp.filter(it => it.id === newProduct.id)[0];
    if (product && quantity <= product.stock) {
      const exists = productsCart.some(it => it.id === newProduct.id);
      if (exists) {
        setProductsCart(current =>
          current.map(it => {
            if (it.id === newProduct.id) {
              return { ...it, quantity: it.quantity + quantity };
            } else {
              return it;
            }
          }),
        );
      } else {
        setProductsCart([...productsCart, { ...newProduct, quantity }]);
      }
      if (quantity === product.stock) {
        setProductsApp(current =>
          current.filter(it => it.id !== newProduct.id),
        );
      } else {
        setProductsApp(current =>
          current.map(it => {
            if (it.id === newProduct.id) {
              return { ...it, stock: product.stock - quantity };
            } else {
              return it;
            }
          }),
        );
      }
    }
  };

  const removeProductCart = (id: number) => {
    const product = productsCart.filter(it => it.id === id)[0];
    if (product) {
      setProductsCart(current => current.filter(it => it.id !== id));
      if (product.stock === product.quantity) {
        setProductsApp([...productsApp, product]);
      } else {
        setProductsApp(current =>
          current.map(it => {
            if (it.id === id) {
              return { ...it, stock: it.stock + product.quantity };
            } else {
              return it;
            }
          }),
        );
      }
    }
  };

  const buyProducts = () => {
    setProductsCart([]);
    Alert.alert('Gracias por comprar!', 'Los productos se enviarán pronto :)', [
      {
        text: 'Cerrar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <ProductsContext.Provider
      value={{
        addProductCart,
        buyProducts,
        products: productsApp,
        productsCart,
        removeProductCart,
        isFetching,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
