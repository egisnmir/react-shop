import './App.scss';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
// import Cart from './components/cart/Cart';
// import INITIAL_CART_CONTENT from './mockData/InitialCartContent';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <div className="content">

        <nav>
          <Link to="/">Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
        
        <Outlet />
      </div>
      {/* <Cart cartContent={INITIAL_CART_CONTENT} removeItem={updateCartContents}></Cart> */}
    </div>
  );
}

export default App;
