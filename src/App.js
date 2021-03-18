import './App.scss';
import { useState } from 'react';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import INITIAL_CART_CONTENT from './mockData/InitialCartContentJson';
import PRODUCTS_LIST from './mockData/ProductsListJson';

function App() {
  const [cartContent, setCartContent] = useState(INITIAL_CART_CONTENT);

  const updateCartContents = (data) => {
    const newContent = [...cartContent];
    const dupeIndex = newContent.findIndex(item => item.id === data.id);

    //Item already in cart, check if amount changed
    if(dupeIndex > -1) {
      if(data.amount <= 0) {
        newContent.splice(dupeIndex, 1);
        setCartContent([...newContent]);
      } else if(newContent[dupeIndex].amount !== data.amount) {
        newContent[dupeIndex].amount = data.amount;
        setCartContent([...newContent]);
      }
    } else {
      //Adding a new item
      if(data.amount > 0) {
        newContent.push(data);
        setCartContent([...newContent]);
      }
    }
  };

  return (
    <div className="app">
      <Products products={PRODUCTS_LIST} updateCartContents={updateCartContents}></Products>
      <Cart cartContent={cartContent}></Cart>
    </div>
  );
}

export default App;
