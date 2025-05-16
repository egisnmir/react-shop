import { useEffect, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.scss';
import { getProducts } from './services/apiService';
import Sidebar from './components/sidebar/Sidebar';
import CartContext from './core/contexts/CartContext';
import { useSelector } from 'react-redux';

function App() {
  const { setProductList, productContent, totalAmount } = useContext<any>(CartContext);
  
  const favoritesFromStore = useSelector((state: any) => state.favorites);
  const favoritesCount = favoritesFromStore.length;

  // TODO: Could write a custom hook here
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
          <Link to='/loan-page'>Loan calculator</Link>
          <Link to='/forms'>Forms</Link>
        </nav>
        
        <Outlet />
      </div>
    </div>
  );
}

export default App;
