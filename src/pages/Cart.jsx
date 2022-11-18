import React from "react";
import NavbarShop from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div>
      <NavbarShop />
      <h1 className="text-center my-2">Корзина</h1>
      <Footer />
    </div>
  );
}

export default Cart;
