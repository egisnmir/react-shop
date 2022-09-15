import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="content">

        <nav>
          <Link to="/">Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/wish-list'>Wish list</Link>
        </nav>
        
        <Outlet />
      </div>
      {/* <Cart cartContent={INITIAL_CART_CONTENT} removeItem={updateCartContents}></Cart> */}
    </div>
  );
}

export default App;
