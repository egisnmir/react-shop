import { useState, createContext } from 'react';
import INITIAL_CART_CONTENT from '../../mockData/InitialCartContent';

//TODO: Remove
const testCartItem = {
    id: 1,
    name: 'Test item',
    price: 2,
    amount: parseInt(Math.random() * 10) + 1
};

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);

    const setDefaultCartContent = () => {
        setCartContent(INITIAL_CART_CONTENT)
    }

    const addTestItemToCart = () => {
        setCartContent((state) => [
            ...state,
            {
                ...testCartItem,
                id: parseInt(Math.random() * 1000)
            }
        ])
    }

    const clearCart = () => {
        setCartContent([]);
    }

    return (
        <CartContext.Provider value={{
            cartContent,
            setDefaultCartContent,
            addTestItemToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;