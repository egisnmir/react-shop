import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS_LIST from "../mockData/ProductsList";

export default function ProductDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    const nameRef = useRef();
    const [productDetails, setProductDetails] = useState();

    const changeNameStyle = () => {
        nameRef.current.style.color = 'red';
        nameRef.current.style.fontWeight = 'bold';
    }

    useEffect(() => {
        PRODUCTS_LIST.forEach((item) => {
            if(item.id === parseInt(params.id)) {
                setProductDetails(item);
            }
        })
    }, []);

    return (
        <main>
            <h4>Product Details page</h4>
            <div>Product ID: {params.id}</div>
            <div ref={nameRef}>Name: {productDetails?.name}</div>
            <div>Price: {productDetails?.price}</div>

            <br />
            <button onClick={() => navigate('/products')}>Return to products</button>
            <br />
            <br />
            <button onClick={() => changeNameStyle()}>Change name color</button>
        </main>
    )
}
