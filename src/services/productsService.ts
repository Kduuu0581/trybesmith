import productsModel from '../models/productsModel';

async function createProduct(name: string, amount: string) {
  const newProduct = await productsModel.createProduct(name, amount);
  return newProduct;
}

export default {
  createProduct,
};