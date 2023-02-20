import express from 'express';
// Midlewares
import rescue from './middlewares/rescue';
// Controllers
import productController from './controllers/products';
import userController from './controllers/users';
import orderController from './controllers/orders';

const app = express();

app.use(express.json());

// Routes
// Products Router
app.post('/products', productController.create);
app.get('/products', productController.getAll);
// Users Router
app.post('/users', userController.create);
// Orders Router
app.get('/orders', orderController.getAll);

app.use(rescue);
export default app;
