import './ProductItem.scss';
import { useState } from 'react';

function ProductItem(props) {
  const [ammount, setAmmount] = useState(0);

  const handleChange = (e) => { 
    setAmmount(e.target.value);
  }

  return (
    <div className="product-item" key={props.id}>
      <div>{props.name}</div>
      <div className="product-image"></div>
      <div>£{props.price} each</div>
      <div className="add-remove-wrapper">
        <div className="remove" onClick={() => {
          props.updateProductAmmount({id: props.id, ammount: -ammount})
        }}>-</div>

        <input type="number" className="ammount" value={ammount} onChange={handleChange}></input>

        <div className="add" onClick={() => {
          props.updateProductAmmount({id: props.id, ammount: +ammount})
        }}>+</div>
      </div>
      <div className="info-icon">i</div>
    </div>
  );
}

export default ProductItem;
