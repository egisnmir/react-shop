import axios from 'axios';
import Product from '../core/interfaces/Product';

const localhost = 'http://localhost';
const port = 3001;
const server = `${localhost}:${port}`;

export const getProducts = () => {
    return axios.get<Product[]>(`${server}/products`);
}

export const getDefaultCartContent = () => {
    return axios.get<Product[]>(`${server}/default-cart-content`)
}
