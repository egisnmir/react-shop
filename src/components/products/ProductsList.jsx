import { useContext } from 'react';
import './ProductsList.scss';
import ProductItem from './ProductItem';
import CartContext from '../contexts/CartContext';

function ProductsList(props) {
  const { cartContent } = useContext(CartContext);

  const productsDOM = props.products.map((product) => {
    const cartProduct = cartContent.find(item => item.id === product.id);

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
