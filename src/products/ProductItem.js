import './ProductItem.scss';
import { useState } from 'react';

function ProductItem(props) {
  const [ammount, setAmmount] = useState(0);

  const handleChange = (e) => { 
    setAmmount(e.target.value);
  };

  return (
    <div className="product-item" key={props.id}>
      <div>{props.name}</div>
      <div className="product-image"></div>
      <div>£{props.price} each</div>
      <div className="add-remove-wrapper">  
        <input type="number" className="ammount" value={ammount} onChange={handleChange}></input>

        <div className="set-ammount" onClick={() => {
          props.setProductAmmount({id: props.id, name: props.name, price: props.price, ammount: +ammount})
        }}>Set</div>
      </div>
    </div>
  );
}

export default ProductItem;
