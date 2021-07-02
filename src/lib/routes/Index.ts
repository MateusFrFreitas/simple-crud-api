import { Router } from 'express';

import productCategoryRoutes from '@routes/productCategoryRoutes';
import productRoutes from '@routes/productRoutes';

const routes = Router();

routes.use(productCategoryRoutes);
routes.use(productRoutes);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

export default routes;
