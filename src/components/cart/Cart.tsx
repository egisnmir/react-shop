import './Cart.scss';
import { useContext } from 'react';
import CartContext from '../../core/contexts/CartContext';
import IProduct from '../../core/interfaces/Product';

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
    //TODO: Could be a separate component
    return (
      <div className="cart-item" key={product.id + 2}  data-testid={product.id}>
        <div className="remove" onClick={() => removeItem({...product, amount: 0})}>x </div>
        <div className="amount">{product.amount}</div>
        <div className="name">{product.name}</div>
        <div className="total-price">{(product.price * product.amount).toFixed(2)}</div>
      </div>
    )
  });

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      {cartItems.length ? cartItems : ''}

      <div className="cart-item cart-total">
        <div className="amount" data-test="cart-amount">{totalAmount}</div>
        <div className="name">Total</div>
        <div className="total-price" data-test="cart-total-price">{totalPrice}</div>
      </div>

      <button className='test-button' onClick={setDefaultCartContent}>setDefaultCartContent()</button>
      <br />
      <button className='test-button' onClick={addTestItemToCart}>addTestItemToCart()</button>
      <br />
      <button className='test-button' onClick={clearCart}>clearCart()</button>
    </div>
  );
};

export default Cart;