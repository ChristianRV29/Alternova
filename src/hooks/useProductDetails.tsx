/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Product } from '~src/@types';
import { fetchProductDetails } from '~src/utils';
import burnedData from '~src/data/data.json';

export const useProductsDetails = (idProduct: number) => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    getProductData(idProduct);
  }, [idProduct]);

  const getProductData = (id: number) => {
    fetchProductDetails(id)
      .then(res => {
        const { data } = res;
        if (data) {
          setProduct(data);
        }
      })
      .catch(() => {
        const burnedProduct = burnedData.products.filter(it => it.id === id)[0];

        if (product) {
          setProduct(burnedProduct);
        }
        // console.log(
        //   '🐞 ~ It just happened and error when trying to get product data',
        //   err?.error,
        // ),
      })
      .finally(() => setIsFetching(false));
  };

  return { product, isFetching };
};
