import React from "react";
import { Button, Card, CardGroup, Container, Row, Col } from "react-bootstrap";

const CatalogeMain = () => {
  return (
    <Container className="background gray">
      <Row className="text-center p-2 m-2">
        <Col>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="../img/card/storeclothing.jpg" />
              <Card.Body>
                <Card.Title>Карты магазинов одежды</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="/card_catalog"
                  className="my-2"
                  variant="secondary"
                >
                  Перейти
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="../img/card/cardservices.jpg" />
              <Card.Body>
                <Card.Title>Карты подписок</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="/card_catalog"
                  className="my-2"
                  variant="secondary"
                >
                  Перейти
                </Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="../img/card/shopproducts.jpg" />
              <Card.Body>
                <Card.Title>Карты магазинов продуктов </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Button
                  href="/card_catalog"
                  className="my-2"
                  variant="secondary"
                >
                  Перейти
                </Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogeMain;
