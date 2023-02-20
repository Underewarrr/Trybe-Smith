import { Request, Response } from 'express';
import orderService from '../services/orders';

const getAll = async (req: Request, res: Response) => {
  const result = await orderService.getAll();

  return res.status(200).json(result);
};

export default {
  getAll,
};