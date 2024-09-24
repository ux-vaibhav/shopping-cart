// Import axios for making HTTP requests
import axios from 'axios';
// Import the Product interface for type safety
import { Product } from './interfaces/Product';

// Define the API URL for fetching products
const API_URL = 'https://dummyjson.com/products?limit=9';

// Function to fetch products from the API
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        // Make a GET request to the API
        const response = await axios.get(API_URL);
        // Return the list of products from the response
        return response.data.products;
    } catch (error) {
        // Log error to the console
        console.error('Error fetching products:', error);
        // Throw a new error to indicate failure
        throw new Error('Failed to fetch products');
    }
};
