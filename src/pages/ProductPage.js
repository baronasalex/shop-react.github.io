import React, { Component } from "react";
import NavbarShop from "../components/Navbar";
import Footer from "../components/Footer";
import Items from "../components/Items";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "iCloud 200ГБ",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "799,89",
        },
        {
          id: 2,
          title: "Apple Music",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "599,89",
        },
        {
          id: 3,
          title: "ЛитРес",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "89,89",
        },
        {
          id: 4,
          title: "Axi Prime",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "99,89",
        },
        {
          id: 5,
          title: "Яндекс ПЛЮС",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "39,89",
        },
        {
          id: 6,
          title: "OKKO",
          img: "youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "899,89",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div>
        <NavbarShop />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] }, () => {
      console.log(this.state.orders);
    });
  }
}


export default ProductPage;

