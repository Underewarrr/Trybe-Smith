import productModel from '../models/products';
import { IProduct } from '../interfaces/products';

const create = async (product: IProduct) => {
  const data = await productModel.create(product);
  return data;
};

const getAll = async () => {
  const data = await productModel.getAll();
  return data;
};

export default {
  create,
  getAll,
};