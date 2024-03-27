import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import App from './App.jsx';
import './index.css';
import HomeScreen from './pages/HomeScreen.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ProductDetails from './Components/Products/ProductDetails.jsx';
import store from './Components/Products/store/store.js';
import OrderCart from './Components/Products/OrderCart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes> {/* corrected component */}
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path='/cart' element={<OrderCart />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
