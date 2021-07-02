import e, { NextFunction, Request, Response } from 'express';

import { Product } from '@entities/Product';

class ProductController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, productCategoryId } = req.body;

      const product = new Product();

      product.name = name;
      product.price = price;
      product.productCategoryId = productCategoryId;

      await product.save();

      return res.status(201).json({ message: "It's ok!", data: product });
    } catch (err) {
      next(err);
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await Product.find();

      return res.json({ message: "It's ok!", data: [ ...products ] });
    } catch (err) {
      next(err);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const product = await Product.findOne({
        where: { id },
        relations: ['productCategory'],
      });

      return res.json({ message: "It's ok!", data: { ...product } });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, price, productCategoryId } = req.body;

      const product = await Product.findOne(id);

      if (!product) {
        return res.json('Product not found.');
      }

      product.name = name ?? product?.name;
      product.price = price ?? product?.price;
      product.productCategoryId = productCategoryId ?? product?.productCategoryId;

      await product.save();

      return res.status(200).json({ message: "It's ok!", data: product });
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      
      const product = await Product.findOne(id);

      await product?.remove();

      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();
