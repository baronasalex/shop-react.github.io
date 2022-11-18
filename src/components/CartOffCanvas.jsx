import { React, useState } from "react";
import { Button, Offcanvas, Nav, Row } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

const CartOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow} className="text-center mt-3">
        <Row>
          <Cart4 size={28} /> <p>Корзина</p>
        </Row>
        <div className="in-cart h6">1</div>
      </Nav.Link>

      <Offcanvas placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Nav.Link className="text-center" href="/cart">
              <Button variant="warning " size="sm">
                Перейти в корзину
              </Button>
            </Nav.Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>тут будут выбранные товары</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffCanvas;
