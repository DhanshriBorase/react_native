import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const ApiService = {
  getAllProducts: () => axios.get(`${API_BASE_URL}/products`),
  getProductById: (id) => axios.get(`${API_BASE_URL}/products/${id}`),
  getProductsByCategory: (category) => axios.get(`${API_BASE_URL}/products/category/${category}`),
};
