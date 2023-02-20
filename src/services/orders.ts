import orderModel from '../models/orders';

const getAll = async () => {
  const result = await orderModel.getAll();
  return result;
};

export default {
  getAll,
};