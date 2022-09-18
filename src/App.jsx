import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import CartContext from './components/contexts/CartContext';
import { useContext } from 'react';

function App() {
  const { totalAmount } = useContext(CartContext);

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
          <Link to='/favorites'>Favorites</Link>
        </nav>
        
        <Outlet />
      </div>
    </div>
  );
}

export default App;
