import { useState, createContext } from 'react';
import INITIAL_CART_CONTENT from '../../mockData/InitialCartContent';
import toastr from 'toastr';

//TODO: Boilerplate test item
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

    const updateCart = (data) => {
        let dupe = false;

        const newContent = cartContent.reduce((result, item) => {
            if(item.id === data.id) {
                dupe = true;
                //Remove item if new amount <= 0
                if(data.amount <= 0) {
                return result;
                }
                //Update item amount
                item.amount = data.amount;
            }

            result.push(item);
            return result;
        }, []);

        //Add a new item
        if(!dupe && data.amount > 0) {
            newContent.push(data);
            toastr.success('New item added to cart');
        } else {
            toastr.info('Cart updated');
        }

        setCartContent([...newContent]);
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
            updateCart,
            addTestItemToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;
