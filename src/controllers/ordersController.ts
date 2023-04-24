import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

async function getOrders(req: Request, res: Response) {
  const users = await ordersService.getOrders();
  res.status(200).json(users);
}

export default {
  getOrders,
};