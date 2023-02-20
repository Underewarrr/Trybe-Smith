import jwt, { Jwt } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Rescue from './errorRescue';
import { IUser } from '../interfaces/users';

dotenv.config();

const incodeToken = (data: object) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

interface IJtw extends Jwt {
  payload: { username: string }
}

const decodeToken = (token: string) => {
  const data = jwt.decode(token, { complete: true }) as IJtw;
  
  if (!data) throw new Rescue(401, 'Invalid token');
  
  return data.payload as IUser;
};

export {
  incodeToken,
  decodeToken,
};