import './Basket.scss';
import { useState, useEffect } from 'react';

function Basket(props) {
  const [basketContent, setBasketContent] = useState([props.basketContent]);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotalAmmount = 0;
    let newTotalPrice = 0;

    setBasketContent(props.basketContent);

    basketContent.forEach(item => {
      newTotalAmmount += item.ammount;
      newTotalPrice += item.price;
    });

    setTotalAmmount(newTotalAmmount);
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [props.basketContent, basketContent]);

  const basketDOM = basketContent.map((product) => {
    return (
      <div className="basket-item" key={product.id + 2}>
        <div className="ammount">{product.ammount}</div>
        <div className="name">{product.name}</div>
        <div className="total-price">{(product.price * product.ammount).toFixed(2)}</div>
      </div>
    )
  });

  return (
    <div className="basket">
      <h5>Shopping Basket</h5>
      {basketDOM}

      <div className="basket-item basket-total">
        <div className="ammount">{totalAmmount}</div>
        <div className="name">Total</div>
        <div className="total-price">{totalPrice}</div>
      </div>
    </div>
  );
}

export default Basket;
