import React from "react";
import NavbarShop from "../components/Navbar";
import ControlledCarousel from "../components/ControlledCarousel";
import CatalogeMain from "./CatalogeMain";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavbarShop />
      <ControlledCarousel />
      <CatalogeMain />
      <Footer />
    </div>
  );
};

export default HomePage;
