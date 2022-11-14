import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row className="text-center p-2 m-2">
          <Col>
            <h5>О компании</h5> <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">Карьера</Nav.Link>
            <Nav.Link href="#action1">Блог</Nav.Link>
            <Nav.Link href="#action1">Об Axi</Nav.Link>
            <Nav.Link href="#action1">Инвесторам</Nav.Link>
          </Col>

          <Col>
            <h5>Зарабатывайте вместе с нами</h5>{" "}
            <Nav.Link href="#action1">Продавать товары на Axi</Nav.Link>
            <Nav.Link href="#action1">Продавать на Axi Business</Nav.Link>
            <Nav.Link href="#action1">Стать партнером</Nav.Link>
            <Nav.Link href="#action1">Рекламируйте свои продукты</Nav.Link>
            <Nav.Link href="#action1">Об Axi</Nav.Link>
            <Nav.Link href="#action1">Разместите Axi Hub</Nav.Link>
            <Nav.Link href="#action1">Еще больше информации</Nav.Link>
          </Col>

          <Col>
            <h5>Мы можем помочь</h5>
            <Nav.Link href="#action1">Ваш аккаунт</Nav.Link>
            <Nav.Link href="#action1">Ваши заказы</Nav.Link>
            <Nav.Link href="#action1">Тарифы и политика доставки</Nav.Link>
            <Nav.Link href="#action1">Возврат и замена</Nav.Link>
            <Nav.Link href="#action1">Помощь</Nav.Link>
          </Col>
        </Row>

        <Row className="text-center p-3 m-3">
          <Col>
            <p>2022 &copy; Axi.com Inc </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
