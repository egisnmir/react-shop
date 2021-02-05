import './App.scss';
import Cart from './cart/Cart';
import Products from './products/Products';
import { useState } from 'react';

function App() {
  const INITIAL_CART_CONTENT = [
    {
      id: 2,
      name: 'Pink Lady Apple',
      price: 0.39,
      amount: 2
    },
    {
      id: 6,
      name: 'Pineapple',
      price: 1.29,
      amount: 4
    }
  ];

  const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);

  const updateCartContents = (data) => {
    const newContent = [...cartContent];
    const dupeIndex = newContent.findIndex(item => item.id === data.id);

    //Handle duplicate
    if(dupeIndex > -1) {
      if(data.amount <= 0) {
        newContent.splice(dupeIndex, 1);
      } else {
        newContent[dupeIndex].amount = data.amount;
      }
    } else {
      if(data.amount > 0) {
        newContent.push(data);
      }
    }

    setCartContent([...newContent]);
  };

  return (
    <div className="app">
      <Products updateCartContents={updateCartContents}></Products>
      <Cart cartContent={cartContent}></Cart>
    </div>
  );
}

export default App;
