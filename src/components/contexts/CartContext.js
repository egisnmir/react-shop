import { useState, createContext } from 'react';
import INITIAL_CART_CONTENT from '../../mockData/InitialCartContent';

const CartContext = createContext();

//TODO: 
const testCartItem = {
    id: 73,
    name: 'Test item',
    price: 0.2,
    amount: 1
};

export function CartProvider({children}) {
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);

    const cartContentUpdate = () => {
        setCartContent([testCartItem])
    }

    const addToCart = () => {
        setCartContent((state) => [...state, testCartItem])
    }

    return (
        <CartContext.Provider value={{cartContent, cartContentUpdate, addToCart}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;