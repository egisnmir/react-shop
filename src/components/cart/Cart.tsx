import './Cart.scss';
import { useContext } from 'react';
import CartContext from '../../core/contexts/CartContext';
import { IProduct } from '../../core/interfaces/Product';

function Cart() {
  const {
    cartContent,
    totalAmount,
    totalPrice,
    setDefaultCartContent,
    addTestItemToCart,
    clearCart,
    removeItem
  } = useContext<any>(CartContext);

  const cartItems = cartContent.map((product: IProduct) => {
    return (
      <div className="cart-item" key={product.id + 2} data-testid="cart-item">
        <div className="remove" role="removeBtn" onClick={() => removeItem({...product, amount: 0})}>x </div>
        <div className="amount">{product.amount}</div>
        <div className="name">{product.name}</div>
        <div className="total-price">{(product.price * product.amount).toFixed(2)}</div>
      </div>
    )
  });

  return (
    <>
      <div className="cart" data-cy="cart">
        <h4>Shopping Cart</h4>
        {cartItems.length ? cartItems : ''}

        <div className="cart-item cart-total" data-cy="cart-total">
          <div className="amount" data-test="cart-amount">{totalAmount}</div>
          <div className="name">Total</div>
          <div className="total-price" data-cy="total-price" data-test="cart-total-price">{totalPrice}</div>
        </div>
      </div>
      <div className='cart-buttons'>
        <button className="test-button" data-cy="set-default-button" onClick={setDefaultCartContent}>Set default content</button>
        <br />
        <button className="test-button" data-cy="add-test-item-button" onClick={addTestItemToCart}>Add test item</button>
        <br />
        <button className="test-button" data-cy="clear-cart-button" role="clearCartBtn" onClick={clearCart}>Clear cart</button>
      </div>
    </>
  );
};

export default Cart;