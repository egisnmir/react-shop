import React, { useState, useEffect } from "react";
import ProductsList from "../components/products/ProductsList";
import axios from "axios";

export default function ProductsPage() {
    const [productsList, setProductsList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/products').then((res) => {
            setProductsList(res.data);
            setLoaded(true);
        })
    }, []);

    return (
        <main>
            <h4>Products page</h4>

            {loaded &&
                <ProductsList
                    products={productsList}>
                </ProductsList>
            }
        </main>
    )
}
