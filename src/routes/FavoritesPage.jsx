import React, { useRef, useContext, useState, useEffect } from "react";
import axios from "axios";
import FavoritesContext from "../components/contexts/FavoritesContext";
import ProductItem from "../components/products/ProductItem";

export default function FavoritesPage() {
    const { favorites } = useContext(FavoritesContext);
    const [productsList, setProductsList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const nameRef = useRef();

    const changeRefStyle = () => {
        nameRef.current.style.color = 'red';
        nameRef.current.style.fontWeight = 'bold';
    }

    useEffect(() => {
        axios.get('http://localhost:3001/products').then((res) => {
            setProductsList(res.data);
            setLoaded(true);
        });
    }, []);

    return (
        <main>
            <h4 ref={nameRef}>Favorites page</h4>

            <button onClick={() => changeRefStyle()}>Change title style</button>
            <br />
            <br />

            <div className="products-wrapper">
                {loaded && favorites.map((id) => {
                    const product = productsList?.find(item => item.id === id);

                    return <ProductItem
                        key={product?.id}
                        id={product?.id}
                        name={product?.name}
                        price={product?.price}
                        noUpdate={true}>
                    </ProductItem>
                })}
            </div>
        </main>
    )
}
