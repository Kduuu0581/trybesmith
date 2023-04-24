import productsModel from '../models/productsModel';

async function createProduct(name: string, amount: string) {
  const newProduct = await productsModel.createProduct(name, amount);
  return newProduct;
}

async function getProduct() {
  const products = await productsModel.getProduct();
  return products;
}

export default {
  createProduct,
  getProduct,
};