import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import Ordres from './pages/Ordres';
import LoginPage from './pages/LoginPage';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import './index.css'


export class App extends Component {
  render() {
    return (
      <div>
        <Routes >
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/orders" element={<Ordres/>} />
      <Route exact path="/favorites" element={<Favorites/>} />
      <Route exact path="/cart" render={()=> {
        return (
          <Cart 
          cartList={this.state.cartList}
          addInCart={this.addInCart}
          orders={this.state.orders}/>
        )
      }} /* element={<Cart/>} */ />
      <Route exact path="/card_catalog" element={<ProductPage/>} />
      
    </Routes >
      </div>
    )
  }
}

export default App




