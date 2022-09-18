import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import CartContext from './components/contexts/CartContext';
import FavoritesContext from './components/contexts/FavoritesContext';
import { useContext } from 'react';

function App() {
  const { totalAmount } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  const favoritesCount = favorites.length;

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
