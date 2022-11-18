import React, { Component } from "react";

import { ProductBuy } from "./product-buy/ProductBuy";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img alt="" src={"../img/card/" + this.props.item.img} />
        <h4> {this.props.item.title} </h4>
        <p> {this.props.item.desc} </p>
        <b> {this.props.item.price} ₽ </b>
        <ProductBuy />
      </div>
    );
  }
}

export default Item;
