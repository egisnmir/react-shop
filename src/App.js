import './App.scss';
import { useState } from 'react';
import Cart from './cart/Cart';
import Products from './products/Products';
import INITIAL_CART_CONTENT from './mockData/InitialCartContentJson';
import PRODUCTS_LIST from './mockData/ProductsListJson';

function App() {
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
      <Products products={PRODUCTS_LIST} updateCartContents={updateCartContents}></Products>
      <Cart cartContent={cartContent}></Cart>
    </div>
  );
}

export default App;
