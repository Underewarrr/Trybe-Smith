import { ResultSetHeader } from 'mysql2';
import { IUser, Id } from '../interfaces/users';
import connection from './connection';

const create = async (user: IUser): Promise<Id> => {
  // insertId from ResultSetHeader
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUE(?, ?, ?, ?)', 
    [user.username, user.classe, user.level, user.password],
  );
  
  return { id: insertId, ...user };
};

export default {
  create,
};