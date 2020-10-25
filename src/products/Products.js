import './Products.scss';
import ProductItem from './ProductItem';
import { useState } from 'react';
import ProductsList from './productsListJson';

function Products(props) {
  const [products] = useState(ProductsList);

  const updateProductAmmount = (data) => {
    props.changeBasketContents(data);
  }

  const productsDOM = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        updateProductAmmount={updateProductAmmount}>
      </ProductItem>
    )
  });

  return (
    <div className="products">
      <h2>Greens Grocery Store</h2>
      <div className="products-wrapper">
        {productsDOM}
      </div>
    </div>
  );
}

export default Products;
