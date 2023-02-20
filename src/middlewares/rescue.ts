import { NextFunction, Request, Response } from 'express';
import ErrorRescue from '../utils/errorRescue';

const rescue = (error: ErrorRescue, _req: Request, res: Response, _next: NextFunction) => {  
  const { status, message } = error;
  res.status(status || 500).json({ message });
};

export default rescue;