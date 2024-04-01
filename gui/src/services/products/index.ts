import api from '@/api';
import { Product, ProductsResponse } from './interfaces';

const getProducts = async (page: number): Promise<ProductsResponse> => {
  const { data } = await api.get(`/products?page=${page}&perPage=10`);

  return data;
};

const getProduct = async (id: string): Promise<Product> => {
  const { data } = await api.get(`/products/${id}`);

  return data;
};

export { getProducts, getProduct };
