import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const getAll = async () => {
  const [result] = await connection.execute<ResultSetHeader>(
    `SELECT orders.id, orders.userId,
    JSON_ARRAYAGG(products.id) AS 'productsIds'
    FROM Trybesmith.Orders as orders
    INNER JOIN Trybesmith.Products as products
    ON orders.id = products.orderId
    GROUP BY orders.id`,
  );

  return result;
};

export default {
  getAll,
};