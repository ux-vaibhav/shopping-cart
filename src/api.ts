import axios from 'axios';
import { Product } from './interfaces/Product';

const API_URL = 'https://dummyjson.com/products?limit=9';

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};
