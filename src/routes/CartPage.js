import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../components/cart/Cart";
import INITIAL_CART_CONTENT from "../mockData/InitialCartContent";

export default function CartPage() {
    const location = useLocation();
    //TODO:
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);

    //TODO:
    const removeItem = () => {
        console.log('remove item');
    }

    return (
        <main>
            <h4>Cart page</h4>

            <Cart
                cartContent={cartContent}
                removeItem={removeItem}
            ></Cart>
        </main>
    )
}
