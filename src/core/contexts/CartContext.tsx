import { useState, createContext, useEffect } from 'react';
import toastr from 'toastr';
import IProduct from '../interfaces/Product';

interface ICartContext {
    setProductList?: (data: any) => void,
    cartContent?: IProduct[],
    productContent?: IProduct[],
    totalAmount: number,
    totalPrice: number,
    setDefaultCartContent?: () => void,
    updateCart?: (data: IProduct) => void,
    addTestItemToCart?: () => void,
    clearCart?: () => void,
    removeItem?: (data: IProduct) => void
}

const defaultState = {
    totalAmount: 0,
    totalPrice: 0
}

const CartContext = createContext<ICartContext>(defaultState);

// Boilerplate, can be removed
const defaultCartContent: IProduct[] = [
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

const testProduct: IProduct = {
    id: 1,
    name: 'Test item',
    price: 2,
    amount: Math.floor((Math.random() * 10) + 1)
}

export const CartProvider = ({children}: any) => {
    const [cartContent, setCartContent] = useState<IProduct[]>(defaultCartContent);
    const [productContent, setProductContent] = useState([]);
    const [totalAmount, setTotalAmount] = useState(defaultState.totalAmount);
    const [totalPrice, setTotalPrice] = useState(defaultState.totalPrice);

    useEffect(() => {
        updateTotalPriceAndAmount();
    }, [cartContent]);

    const setProductList = (data: any) => {
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
        setTotalPrice(parseInt(newTotalPrice.toFixed(2)));
    }

    const setDefaultCartContent = () => {
        defaultCartContent[0].amount = 2;
        defaultCartContent[1].amount = 4;
        
        setCartContent(defaultCartContent);
    }

    const updateCart = (data: IProduct) => {
        let dupe = false;

        const newContent: IProduct[] = cartContent.reduce((result: IProduct[], item: IProduct) => {
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
                amount: Math.floor((Math.random() * 10) + 1),
                id: Math.floor(Math.random() * 10000) + 1
            }
        ]);
    }

    const clearCart = () => {
        setCartContent([]);
    }

    const removeItem = (data: IProduct) => {
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
