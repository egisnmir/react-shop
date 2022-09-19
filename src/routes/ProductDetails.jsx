import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import ProductItem from "../components/products/ProductItem";

export default function ProductDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:3001/products').then((res) => {
            res.data.forEach((item) => {
                if(item.id === parseInt(params.id)) {
                    setProductDetails(item);
                    setLoaded(true);
                }
            })
        });
    }, []);

    return (
        <main>
            <h4>Product details page</h4>

            {loaded &&
                <>
                <ProductItem
                    id={params.id}
                    name={productDetails?.name}
                    price={productDetails?.price}
                    noNav={true}>
                </ProductItem>

                <br />
                <button onClick={() => navigate(-1)}>Return back</button>
                </>
            }
        </main>
        
    )
}
