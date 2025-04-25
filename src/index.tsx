import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { store } from './core/store/store';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import {
    ProductsPage,
    CartPage,
    HomePage,
    FavoritesPage,
    ProductDetailsPage,
    LoanPage
} from './routes';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './core/contexts/CartContext';
import toastr from 'toastr';

toastr.options = {
  "positionClass": "toast-top-center",
  "timeOut": 1500
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Provider store={store}>
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
                        <Route path="/loan-page" element={<LoanPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
