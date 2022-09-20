import React, { useRef, useContext } from "react";
import CartContext from "../components/contexts/CartContext";
import FavoritesContext from "../components/contexts/FavoritesContext";
import ProductItem from "../components/products/ProductItem";

export default function FavoritesPage() {
    const { productContent } = useContext(CartContext);
    const { favorites } = useContext(FavoritesContext);

    const nameRef = useRef();

    const changeRefStyle = () => {
        nameRef.current.style.color = 'red';
        nameRef.current.style.fontWeight = 'bold';
    }

    return (
        <main>
            <h4 ref={nameRef}>Favorites page</h4>

            <button onClick={() => changeRefStyle()}>Change title style</button>
            <br />
            <br />

            <div className="products-wrapper">
                {favorites.map((id) => {
                    const product = productContent?.find(item => item.id === id);

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
