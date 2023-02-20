import jwt from 'jsonwebtoken';
import productModel from '../models/users';
import { IUser } from '../interfaces/users';
import Token from '../interfaces/token';

const create = async (user: IUser): Promise<Token> => {
  const data = await productModel.create(user);
  const token = jwt.sign({ data: { data } }, process.env.JWT_SECRET as string);
  return { token };
};

export default {
  create,
};