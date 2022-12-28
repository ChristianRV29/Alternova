import { useEffect, useState } from 'react';
import { Product } from '~src/@types';
import { fetchProductDetails } from '~src/utils';

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
      .catch((err: any) =>
        console.log(
          '🐞 ~ It just happened and error when trying to get product data',
          err?.error,
        ),
      )
      .finally(() => setIsFetching(false));
  };

  return { product, isFetching };
};
