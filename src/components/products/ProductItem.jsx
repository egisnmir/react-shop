import { useState, useContext } from 'react';
import './ProductItem.scss';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import FavoritesContext from '../contexts/FavoritesContext';

function ProductItem(props) {
  const [amount, setAmount] = useState(props.value);

  const {
    updateCart
  } = useContext(CartContext);

  const {
    favorites,
    toggleFavorite
  } = useContext(FavoritesContext);

  const handleChange = (e) => { 
    setAmount(e.target.value);
  };

  const handleClickFavorite = (id) => {
    toggleFavorite(id);
  }

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
      <svg
        className={`heart-svg ${favorites.includes(parseInt(props.id)) ? 'active' : ''}`}
        onClick={() => handleClickFavorite(props.id)}>
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            fill="currentColor">
          </path>
      </svg>
      <div>{props.price}€ each</div>
      <div className="add-remove-wrapper">  
      {props.noUpdate ||
        <>
          <input
            type="number"
            min="0"
            className="amount"
            value={amount}
            onChange={handleChange}
          ></input>
          <div className="set-amount" onClick={() => {
            updateCart({
              id: props.id,
              name: props.name,
              price: props.price,
              amount: +amount
            })
          }}>Set</div>
        </>
        }
      </div>
    </div>
  );
}

export default ProductItem;
