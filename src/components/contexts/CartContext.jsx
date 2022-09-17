import { useState, createContext, useEffect } from 'react';
import INITIAL_CART_CONTENT from '../../mockData/InitialCartContent';
import toastr from 'toastr';

//Boilerplate test item
const testCartItem = {
    id: 1,
    name: 'Test item',
    price: 2,
    amount: parseInt(Math.random() * 10) + 1
};

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        updateTotalPriceAndAmount();
    }, [cartContent]);

    const updateTotalPriceAndAmount = () => {
        let newTotalAmount = 0;
        let newTotalPrice = 0;

        cartContent.forEach(item => {
          newTotalAmount += item.amount;
          newTotalPrice += item.price * item.amount;
        });

        setTotalAmount(newTotalAmount);
        setTotalPrice(newTotalPrice.toFixed(2));
    }

    const setDefaultCartContent = () => {
        setCartContent(INITIAL_CART_CONTENT);
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

        setCartContent([...newContent])
    }

    const addTestItemToCart = () => {
        setCartContent([
            ...cartContent,
            {
                ...testCartItem,
                id: parseInt(Math.random() * 1000)
            }
        ]);
    }

    const clearCart = () => {
        setCartContent([]);
    }

    const removeItem = (data) => {
        setCartContent(data);
    }

    return (
        <CartContext.Provider value={{
            cartContent,
            totalAmount,
            totalPrice,
            setDefaultCartContent,
            updateCart,
            addTestItemToCart,
            clearCart,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;
