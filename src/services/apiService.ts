import axios from 'axios';
import Product from '../core/interfaces/Product';

export const getProducts = () => {
    return axios.get<Product[]>('http://localhost:3001/products');
}
