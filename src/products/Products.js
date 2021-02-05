import './Products.scss';
import ProductItem from './ProductItem';
import ProductsList from './ProductsListJson';

function Products(props) {
  const callback = (data) => {
    props.updateCartContents(data);
  };

  const productsDOM = ProductsList.map((product) => {
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
      <h2>Grocery Store</h2>
      <div className="products-wrapper">
        {productsDOM}
      </div>
    </div>
  );
}

export default Products;
