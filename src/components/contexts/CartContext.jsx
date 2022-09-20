import { useState, createContext, useEffect } from 'react';
import toastr from 'toastr';

const CartContext = createContext();

// Boilerplate, can be removed
const INITIAL_CART_CONTENT = [
    {
        id: 2,
        name: 'Pink Lady Apple',
        price: 0.39,
        amount: 2
    },
    {
        id: 6,
        name: 'Pineapple',
        price: 1.29,
        amount: 4
    }
];

const testProduct = {
    id: 1,
    name: 'Test item',
    price: 2,
    amount: parseInt(Math.random() * 10) + 1
}

export const CartProvider = ({children}) => {
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);
    const [productContent, setProductContent] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        updateTotalPriceAndAmount();
    }, [cartContent]);

    const setProductList = (data) => {
        setProductContent(data);
    }

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
                ...testProduct,
                id: parseInt(Math.random() * 1000)
            }
        ]);
    }

    const clearCart = () => {
        setCartContent([]);
    }

    const removeItem = (data) => {
        updateCart(data);
    }

    return (
        <CartContext.Provider value={{
            setProductList,
            cartContent,
            productContent,
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
