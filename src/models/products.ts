import { ResultSetHeader } from 'mysql2';
import { IProduct, Id } from '../interfaces/products';
import connection from './connection';

const create = async (product: IProduct): Promise<Id> => {
  // insertId from ResultSetHeader
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUE (?, ?)', 
    [product.name, product.amount],
  );

  return { id: insertId, ...product };
};

const getAll = async () => {
  const [data] = await connection.execute<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Products',
  );

  return data;
};

export default {
  create,
  getAll,
};