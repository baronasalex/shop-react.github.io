import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img alt="img" src={"../img/card/" + this.props.item.img} />
        <h4> {this.props.item.title} </h4>
        <b> {this.props.item.price} ₽ </b>
      </div>
    );
  }
}

export default Order;
