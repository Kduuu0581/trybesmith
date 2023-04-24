import { Request, Response } from 'express';
import productsService from '../services/productsService';

async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productsService.createProduct(name, amount);
  res.status(201).json(newProduct);
}

export default {
  createProduct,
};