import './ProductsList.scss';
import ProductItem from './ProductItem';

function ProductsList(props) {
  const productsDOM = props.products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}>
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
