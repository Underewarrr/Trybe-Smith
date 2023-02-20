import { Request, Response } from 'express';
import userService from '../services/users';

// Modo padrão de se fazer com js agora com Tipagem.

const create = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;
  const data = await userService.create(user);
  res.status(201).json(data);
};

export default {
  create, 
};