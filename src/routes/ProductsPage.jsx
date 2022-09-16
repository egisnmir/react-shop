import React from "react";
import ProductsList from "../components/products/ProductsList";
import PRODUCTS_LIST from "../mockData/ProductsList";
// import Cart from "../components/cart/Cart";

export default function ProductsPage() {
    // let dupe = false;

    //TODO:
    // const removeItem = () => {
    //     console.log('removeItem() in ProductsPage');
    // }

    // const updateCartContents = (data) => {
    //     const newContent = cartContent.reduce((result, item) => {
    //     if(item.id === data.id) {
    //         dupe = true;
    //         //Remove item if new amount <= 0
    //         if(data.amount <= 0) {
    //         return result;
    //         }
    //         //Update item amount
    //         item.amount = data.amount;
    //     }

    //     result.push(item);
    //     return result;
    //     }, []);

    //     //Add a new item
    //     if(!dupe && data.amount > 0) {
    //     newContent.push(data);
    //     }

    //     setCartContent([...newContent]);
    // };

    return (
        <main>
            <h4>Products page</h4>

            <ProductsList
                products={PRODUCTS_LIST}
                // updateCartContents={updateCartContents}
            >
            </ProductsList>
        </main>
    )
}
