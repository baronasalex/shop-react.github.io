import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <Container className="my-3">
        <main>
          {this.props.items.map((el) => (
            <Item key={el.id} item={el} onAdd={this.props.onAdd} />
          ))}
        </main>
      </Container>
    );
  }
}

export default Items;
