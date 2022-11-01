import { useRef, useContext } from "react";
import CartContext from "../core/contexts/CartContext";
import ProductItem from "../components/products/ProductItem";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
    const favorites = useSelector(state => state.favorites);

    const { productContent } = useContext(CartContext);
    
    // There is an error here with the keys when loading the favorites page directly.
    // it's because we are fetching data from the backend for the products list but
    // the favorites list is just a hardcoded value in the context

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
