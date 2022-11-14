import React from "react";
import { Button, Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";
import YouCard from "../assets/card/youcard.jpg";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "799,89",
        },
        {
          id: 2,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "599,89",
        },
        {
          id: 3,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "89,89",
        },
        {
          id: 4,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "99,89",
        },
        {
          id: 5,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "39,89",
        },
        {
          id: 6,
          title: "Ваша карта",
          img: "../assets/card/youcard.jpg",
          desc: " Lorem, ipsum dolor sit amet consectetur adipisicing.",
          category: "card",
          price: "899,89",
        },
      ],
    };
  }
}

export default Product;

/* 
const ProductTemp = () => {
  return (
    <Container className="background gray">
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
    </Container>
  );
};

export default ProductTemp; */
