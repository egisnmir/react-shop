import { useContext, FC } from 'react';
import './ProductsList.scss';
import ProductItem from './ProductItem';
import CartContext from '../../core/contexts/CartContext';
import { IProduct, IProductsList } from '../../core/interfaces/Product';

const ProductsList: FC<any> = (props: IProductsList) => {
    const { cartContent } = useContext<any>(CartContext);

    const productsDOM = props.products.map((product: IProduct) => {
        const cartProduct: IProduct = cartContent.find((item: IProduct) => item.id === product.id);

        return (
            <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                amount={cartProduct?.amount ? cartProduct.amount : 0}>
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
