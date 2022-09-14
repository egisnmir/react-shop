import React, { useState } from "react";
import ProductsList from "../components/products/ProductsList";
import PRODUCTS_LIST from "../mockData/ProductsList";
import INITIAL_CART_CONTENT from "../mockData/InitialCartContent";

export default function Products() {
    const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);
    let dupe = false;

    const updateCartContents = (data) => {
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
        }

        setCartContent([...newContent]);
    };

    return (
        <main>
            <h4>Products page</h4>

            <ProductsList products={PRODUCTS_LIST} updateCartContents={updateCartContents}></ProductsList>
        </main>
    )
}
