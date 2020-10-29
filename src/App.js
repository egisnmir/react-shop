import './App.scss';
import Cart from './cart/Cart';
import Products from './products/Products';
import { useState } from 'react';

function App() {
  const initialCartContent = [
    {
      id: 2,
      name: 'Pink Lady Apple',
      price: 0.39,
      ammount: 2
    },
    {
      id: 6,
      name: 'Pineapple',
      price: 1.29,
      ammount: 4
    }
  ];

  const [cartContent, setCartContent] = useState(initialCartContent);

  //Remove direct state mutation
  const updateCartContents = (data) => {
    const newContent = [...cartContent];
    const dupeIndex = newContent.findIndex(item => item.id === data.id);

    //Handle duplicate
    if(dupeIndex > -1) {
      if(data.ammount <= 0) {
        newContent.splice(dupeIndex, 1);
      } else {
        newContent[dupeIndex].ammount = data.ammount;
      };
    } else {
      if(data.ammount > 0) {
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
