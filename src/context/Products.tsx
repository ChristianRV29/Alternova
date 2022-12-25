import React, { createContext, useEffect, useState } from 'react';
import { Product, ProductCart, ProductContextProps } from '~src/@types';
import { data } from '~src/data';

export const ProductsContext = createContext({} as ProductContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [productsCart, setProductsCart] = useState<Array<ProductCart>>([]);

  useEffect(() => {
    const availableProducts = data.products.filter(it => it.stock > 0);
    if (availableProducts.length > 0) {
      setProducts(availableProducts);
    }
  }, []);

  const addProductCart = (newProduct: Product, quantity: number) => {
    const product = products.filter(it => it.id === newProduct.id)[0];

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
        setProducts(current => current.filter(it => it.id !== newProduct.id));
      } else {
        setProducts(current =>
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
        setProducts([...products, product]);
      } else {
        setProducts(current =>
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

  const buyProducts = () => setProductsCart([]);

  return (
    <ProductsContext.Provider
      value={{
        addProductCart,
        buyProducts,
        products,
        productsCart,
        removeProductCart,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
