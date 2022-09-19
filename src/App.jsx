import { useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.scss';
import { getProducts } from './services/apiService';
import Sidebar from './components/sidebar/Sidebar';
import CartContext from './components/contexts/CartContext';
import FavoritesContext from './components/contexts/FavoritesContext';

function App() {
  const { setProductList, productContent, totalAmount } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  const favoritesCount = favorites.length;
    
  useEffect(() => {
      if(productContent.length === 0) {
          getProducts().then((res) => {
              setProductList(res.data);
          });
      }
  }, []);

  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="content">

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>
            Cart{totalAmount > 0 ? ` [${totalAmount}]` : ''}
          </Link>
          <Link to='/favorites'>
            Favorites{favoritesCount > 0 ? ` [${favoritesCount}]` : ''}
          </Link>
        </nav>
        
        <Outlet />
      </div>
    </div>
  );
}

export default App;
