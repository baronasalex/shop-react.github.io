import React from "react";
import NavbarShop from "../components/Navbar";
import Footer from "../components/Footer";
import Order from "../components/Order";

function Cart(props) {
  return (
    <div>
      <NavbarShop />
      <h1 className="text-center my-2">Корзина</h1>
      <div className="shop-cart">
        {props.orders.map((el) => (
          <Order key={el.id} item={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
