import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Rescue from '../utils/errorRescue';

export default function Auth(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new Rescue(401, 'Token not found!');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded; 
    
    next();
  } catch (err) {
    console.log(err);
      
    throw new Rescue(401, 'Unauthorized!');
  }
}