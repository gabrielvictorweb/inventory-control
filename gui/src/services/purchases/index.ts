import api from '@/api';
import { PurchaseInterface } from './interfaces';

const savePurchase = async (idProduct: number, quantity: number): Promise<unknown> => {
  return api.post('/purchases', {
    idProduct,
    quantity
  });
};

const getPurchases = async (): Promise<PurchaseInterface[]> => {
  const { data } = await api.get('/purchases');

  return data;
};

export { savePurchase, getPurchases };
