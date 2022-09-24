import React, { useContext } from "react";
import ProductsList from "../components/products/ProductsList";
import CartContext from "../core/contexts/CartContext";

export default function ProductsPage() {
    const { productContent } = useContext(CartContext);

    return (
        <main>
            <h4>Products page</h4>

            <ProductsList
                products={productContent}>
            </ProductsList>
        </main>
    )
}
