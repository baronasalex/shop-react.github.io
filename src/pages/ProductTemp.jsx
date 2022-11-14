import React, { Component } from "react";
import { Button, Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import YouCard from "../assets/card/youcard.jpg";

export class ProductTemp extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <h1>{el.title}</h1>
        ))}
      </main>
    );
  }
}

export default ProductTemp;

{
  /* <Container className="background gray">
<Row className="text-center p-2 m-2">
  <Col>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={YouCard} />
        <Card.Body>
          <Card.Title>Ваша карта </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="btn btn-outline-secondary">
            <Cart4 size={20} />
          </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={YouCard} />
        <Card.Body>
          <Card.Title>Ваша карта </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="btn btn-outline-secondary">
            <Cart4 size={20} />
          </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={YouCard} />
        <Card.Body>
          <Card.Title>Ваша карта </Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="btn btn-outline-secondary">
            <Cart4 size={20} />
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  </Col>
</Row>
</Container> */
}
