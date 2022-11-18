import React from "react";
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  Form,
  Button,
  Dropdown,
  Row,
} from "react-bootstrap";

import {
  Search,
  BookmarkHeart,
  Person,
  CardChecklist,
} from "react-bootstrap-icons";
import Cataloge from "./Cataloge";
import CartOffCanvas from "./CartOffCanvas";

const NavbarShop = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h1>Axi</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-2 my-2">
            <Cataloge />
          </Nav>

          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Где?
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Все категории</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Игрушки</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Одежда</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="me-auto"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              type="search"
              placeholder="Что будем искать?"
            />
            <Button variant="outline-secondary" id="button-addon1">
              <Search />
            </Button>
          </InputGroup>

          <Nav.Link href="/login" className="text-center mt-3">
            <Row>
              <Person size={28} /> <p>Войти</p>
            </Row>
          </Nav.Link>

          <Nav.Link href="/orders" className="text-center mt-3">
            <Row>
              <CardChecklist size={28} /> <p>Заказы</p>
            </Row>
          </Nav.Link>

          <Nav.Link href="/favorites" className="text-center mt-3">
            <Row>
              <BookmarkHeart size={28} /> <p>Избранное</p>
            </Row>
          </Nav.Link>

          <CartOffCanvas />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarShop;
