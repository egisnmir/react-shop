import './Cart.scss';
import { useState, useEffect } from 'react';

function Cart(props) {
  const [totalAmount, setTotalAmount] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    let newTotalAmount = 0;
    let newTotalPrice = 0;

    props.cartContent.forEach(item => {
      newTotalAmount += item.amount;
      newTotalPrice += item.price * item.amount;
    });

    setTotalAmount(newTotalAmount);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [props.cartContent]);

  const cartDOM = props.cartContent.map((product) => {
    return (
      <div className="cart-item" key={product.id + 2}>
        <div className="remove">{product.remove}</div>
        <div className="amount">{product.amount}</div>
        <div className="name">{product.name}</div>
        <div className="total-price">{(product.price * product.amount).toFixed(2)}</div>
      </div>
    )
  });

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      {cartDOM}

      {totalAmount && totalAmount &&
        <div className="cart-item cart-total">
          <div className="amount">{totalAmount}</div>
          <div className="name">Total</div>
          <div className="total-price">{totalPrice}</div>
        </div>
      }
    </div>
  );
}

export default Cart;
