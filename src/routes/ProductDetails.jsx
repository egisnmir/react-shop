import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS_LIST from "../mockData/ProductsList";
import ProductItem from "../components/products/ProductItem";

export default function ProductDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        PRODUCTS_LIST.forEach((item) => {
            if(item.id === parseInt(params.id)) {
                setProductDetails(item);
            }
        })
    }, [params.id]);

    return (
        <main>
            <h4>Product details page</h4>

            <ProductItem
                id={params.id}
                name={productDetails?.name}
                price={productDetails?.price}
                noNav={true}>
            </ProductItem>

            <br />
            <button onClick={() => navigate(-1)}>Return back</button>
        </main>
    )
}
