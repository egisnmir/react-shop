import axios from 'axios';

export const getProducts = () => {
    return axios.get('http://localhost:3001/products');
}
