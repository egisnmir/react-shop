import './ProductItem.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductItem(props) {
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => { 
    setAmount(e.target.value);
  };

  return (
    <div className="product-item" key={props.id} data-testid={props.id}>
      {props.noNav ?
        <div className="product-title">{props.name}</div>
        :
        <Link to={'/product-details/' + props.id} state={props.name}>
          <div className="product-title">{props.name}</div>
        </Link>
      }
      <div className="product-image"></div>
      <div>£{props.price} each</div>
      <div className="add-remove-wrapper">  
        <input
          type="number"
          min="0"
          className="amount"
          value={amount}
          onChange={handleChange}
        ></input>

        <div className="set-amount" onClick={() => {
          props.setProductAmount({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: +amount
          })
        }}>Set</div>
      </div>
    </div>
  );
}

export default ProductItem;
