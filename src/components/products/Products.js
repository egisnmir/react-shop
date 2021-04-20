import './products.scss';
import ProductItem from './product-item';

function Products(props) {
  const callback = (data) => {
    props.updateCartContents(data);
  };

  const productsDOM = props.products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        setProductAmount={callback}>
      </ProductItem>
    )
  });

  return (
    <div className="products">
      <h4>Grocery Store</h4>
      <div className="products-wrapper">
        {productsDOM}
      </div>
    </div>
  );
}

export default Products;
