import './App.scss';
import Basket from './basket/Basket';
import Products from './products/Products';
import ProductsList from './products/ProductsListJson';
import { useState } from 'react';

function App() {
  const initialBasketContent = [
    {
      id: 2,
      name: 'Pink Lady Apple',
      price: 0.39,
      ammount: 3
    },
    {
      id: 6,
      name: 'Pineapple',
      price: 1.29,
      ammount: 1
    },
    {
      id: 4,
      name: 'Brocolli',
      price: 0.49,
      ammount: 6
    }
  ];

  const [basketContent, updatebasketContent] = useState(initialBasketContent);

  const changeBasketContents = (data) => {
    let unique = true;

    basketContent.forEach((item, index) => {
      if(item.id === data.id) {
        unique = false;
        item.ammount += data.ammount;

        if(item.ammount <= 0) {
          basketContent.splice(index, 1);
        }
      }
    });

    if(unique && data.ammount > 0) {
      let item = ProductsList.find((item) => {
        return item.id === data.id;
      });

      data.name = item.name;
      data.price = item.price;

      updatebasketContent([...basketContent, data]);
    } else {
      updatebasketContent([...basketContent]);
    }
  }

  return (
    <div className="app">
      <Products changeBasketContents={changeBasketContents}></Products>
      <Basket basketContent={basketContent}></Basket>
    </div>
  );
}

export default App;
