import axios from 'axios';
import Product from '../core/interfaces/Product';

const localhost = 'http://localhost';
const port = 3001;
const server = `${localhost}:${port}`;

export const useGetProducts = () => {
    return axios.get<Product[]>(`${server}/products`)
        .catch(error => {
            console.error('Failed to get products:', error);
            throw error;
        });
}

export const useGetDefaultCartContent = () => {
    return axios.get<Product[]>(`${server}/default-cart-content`)
        .catch(error => {
            console.error('Failed to get default cart content:', error);
            throw error;
        });
}
