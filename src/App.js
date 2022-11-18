import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Orders from './pages/Orders';
import LoginPage from './pages/LoginPage';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux';


export class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <Routes >
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/card_catalog" element={<ProductPage />} />
          </Routes >
        </div>
      </Provider>
    )
  }
}

export default App




