import React from "react";
import ProductsList from "../components/products/ProductsList";
import PRODUCTS_LIST from "../mockData/ProductsList";

export default function ProductsPage() {
    return (
        <main>
            <h4>Products page</h4>

            <ProductsList
                products={PRODUCTS_LIST}>
            </ProductsList>
        </main>
    )
}
