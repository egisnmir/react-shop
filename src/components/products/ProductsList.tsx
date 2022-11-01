import { useContext } from 'react';
import './ProductsList.scss';
import ProductItem from './ProductItem';
import CartContext from '../../core/contexts/CartContext';
import Product from '../../core/interfaces/Product';

function ProductsList(props: any) {
    const { cartContent } = useContext<any>(CartContext);

    const productsDOM = props.products.map((product: Product) => {
        const cartProduct: Product = cartContent.find((item: Product) => item.id === product.id);

        return (
            <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                value={cartProduct?.amount ? cartProduct.amount : 0}>
            </ProductItem>
        )
    });

    return (
        <div className="products">
            <h4>Products list</h4>
            <div className="products-wrapper">
                {productsDOM}
            </div>
        </div>
    );
}

export default ProductsList;
