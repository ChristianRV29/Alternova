/* eslint-disable quotes */
import { Product, ProductsResponse } from '~src/@types';
import { AlternovaAPI } from '~src/api';

type ResponseProducts = {
  data: Array<Product> | null;
  message: string;
  error: any;
};

type ResponseProduct = {
  data: Product | null;
  message: string;
  error: any;
};

export const fetchProducts = () =>
  new Promise<ResponseProducts>((resolve, reject) =>
    AlternovaAPI.get<ProductsResponse>('all-products')
      .then(response => {
        const { data } = response;
        if (data) {
          resolve({
            data: data.products,
            message: `Products' information was retrieved!`,
            error: null,
          });
        }
      })
      .catch(err =>
        reject({
          data: null,
          message: `Products' information could not be obtained`,
          error: err?.message || err,
        }),
      ),
  );

export const fetchProductDetails = (id: number) =>
  new Promise<ResponseProduct>((resolve, reject) => {
    AlternovaAPI.get<Product>(`detail/${id}`)
      .then(response => {
        const { data } = response;
        if (data) {
          resolve({
            data,
            message: `Products' information was retrieved!`,
            error: null,
          });
        }
      })
      .catch(err =>
        reject({
          data: null,
          message: `Product's information could not be obtained`,
          error: err?.message || err,
        }),
      );
  });
