import ordersModel from '../models/ordersModel';

async function getOrders() {
  const users = await ordersModel.getOrders();
  return users;
}

export default {
  getOrders,
};