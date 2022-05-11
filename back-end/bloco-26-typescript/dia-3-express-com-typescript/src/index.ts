import express from 'express';
import ProductsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});