import './Cart.scss';
import { useState, useEffect, useContext } from 'react';
import CartContext from '../contexts/CartContext';

function Cart(props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    cartContent,
    setDefaultCartContent,
    addTestItemToCart,
    clearCart
  } = useContext(CartContext);

  useEffect(() => {
    let newTotalAmount = 0;
    let newTotalPrice = 0;

    cartContent.forEach(item => {
      newTotalAmount += item.amount;
      newTotalPrice += item.price * item.amount;
    });

    setTotalAmount(newTotalAmount);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [cartContent]);

  const cartItems = cartContent.map((product) => {
    return (
      <div className="cart-item" key={product.id + 2}  data-testid={product.id}>
        <div className="remove" onClick={() => props.removeItem({...product, amount: 0})}>x </div>
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