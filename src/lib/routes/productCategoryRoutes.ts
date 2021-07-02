import { Router } from 'express';

import ProductCategoryController from '@controllers/ProductCategoryController';

const routes = Router();

routes.get('/product-categories', ProductCategoryController.index);
routes.post('/product-categories', ProductCategoryController.store);
routes.get('/product-categories/:id', ProductCategoryController.show);
routes.put('/product-categories/:id', ProductCategoryController.update);
routes.delete('/product-categories/:id', ProductCategoryController.delete);

export default routes;
