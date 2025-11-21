import axios from 'axios';
import { IProduct } from '../core/interfaces/Product';

const localhost = 'http://localhost';
const port = 3001;
const server = `${localhost}:${port}`;

export const getProducts = () => {
    return axios.get<IProduct[]>(`${server}/products`)
        .catch(error => {
            console.error('Failed to get products:', error);
            throw error;
        });
}

export const getDefaultCartContent = () => {
    return axios.get<IProduct[]>(`${server}/default-cart-content`)
        .catch(error => {
            console.error('Failed to get default cart content:', error);
            throw error;
        });
}
