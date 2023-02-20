import { Request, Response } from 'express';
import productService from '../services/products';

// Modo padrão de se fazer com js agora com Tipagem.

const create = async (req: Request, res: Response) => {
  const product = req.body;
  const data = await productService.create(product);

  return res.status(201).json(data);
};

const getAll = async (req: Request, res: Response) => {
  //
  const data = await productService.getAll();

  return res.status(200).json(data);
};

export default {
  create, 
  getAll,
};