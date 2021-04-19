import './Products.scss';
import ProductItem from './ProductItem';

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
      <div className="products-wrapper">
        {productsDOM}
      </div>
    </div>
  );
}

export default Products;
