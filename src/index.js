import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import ProductsPage from './routes/ProductsPage';
import CartPage from './routes/CartPage';
import HomePage from './routes/HomePage';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
