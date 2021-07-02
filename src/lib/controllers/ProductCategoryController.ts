import { NextFunction, Request, Response } from 'express';

import { ProductCategory } from '@entities/ProductCategory';

class ProductCategoryController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const productCategory = new ProductCategory();

      productCategory.name = name;

      await productCategory.save();

      return res.status(201).json({ message: "It's ok!", data: productCategory });
    } catch (err) {
      next(err);
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const productCategories = await ProductCategory.find();

      return res.json({ message: "it's ok", data: [ ...productCategories ] });
    } catch (err) {
      next(err);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const productCategory = await ProductCategory.findOne({
        where: { id },
        relations: ['products'],
      });

      return res.json({ message: "It's ok!", data: { ...productCategory } });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const productCategory = await ProductCategory.findOne(id);

      if (!productCategory) {
        return res.json('Product Category not found.');
      }

      productCategory.name = name;

      await productCategory.save();

      return res.status(200).json({ message: "It's ok!", data: productCategory });
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const productCategory = await ProductCategory.findOne(id);

      await productCategory?.remove();

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductCategoryController();
