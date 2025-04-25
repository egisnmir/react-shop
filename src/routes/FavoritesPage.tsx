import { useRef, useContext } from "react";
import CartContext from "../core/contexts/CartContext";
import ProductItem from "../components/products/ProductItem";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
    const favorites = useSelector((state: any) => state.favorites);

    const { productContent } = useContext<any>(CartContext);
    
    const nameRef = useRef<any>();

    const changeRefStyle = () => {
        nameRef.current.style.color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        nameRef.current.style.fontWeight = 'bold';
    }

    return (
        <main>
            <h4 ref={nameRef}>Favorites page</h4>

            <button onClick={() => changeRefStyle()}>Set random title color</button>
            <br />
            <br />

            <div className="products-wrapper">
                {favorites.map((id: any) => {
                    const product = productContent?.find((item: any) => item.id === id);

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
