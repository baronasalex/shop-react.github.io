import React, { Component } from "react";
import { Cart4 } from "react-bootstrap-icons";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"../img/card/" + this.props.item.img} />
        <h4> {this.props.item.title} </h4>
        <p> {this.props.item.desc} </p>
        <b> {this.props.item.price} ₽ </b>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          <Cart4 className="cart-icon" size={20} />
        </div>
      </div>
    );
  }
}

export default Item;
