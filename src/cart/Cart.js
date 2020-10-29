import './Cart.scss';
import { useState, useEffect } from 'react';

function Cart(props) {
  const [totalAmmount, setTotalAmmount] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    let newTotalAmmount = 0;
    let newTotalPrice = 0;

    props.cartContent.forEach(item => {
      newTotalAmmount += item.ammount;
      newTotalPrice += item.price * item.ammount;
    });

    setTotalAmmount(newTotalAmmount);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [props.cartContent]);

  const cartDOM = props.cartContent.map((product) => {
    return (
      <div className="cart-item" key={product.id + 2}>
        <div className="ammount">{product.ammount}</div>
        <div className="name">{product.name}</div>
        <div className="total-price">{(product.price * product.ammount).toFixed(2)}</div>
      </div>
    )
  });

  return (
    <div className="cart">
      <h4>Shopping Cart</h4>
      {cartDOM}

      {totalAmmount && totalAmmount &&
        <div className="cart-item cart-total">
          <div className="ammount">{totalAmmount}</div>
          <div className="name">Total</div>
          <div className="total-price">{totalPrice}</div>
        </div>
      }
    </div>
  );
}

export default Cart;
