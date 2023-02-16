import React from 'react'
import { Badge, Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import SingleData from './SingleData';

function Header() {
  const { quantity}=useSelector((state)=>state.cart);
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <LinkContainer to="/">
            <img className='w-100 me-5' src='https://wpocean.com/html/tf/themart/assets/images/logo.svg' alt=''/>
            </LinkContainer>
        </Navbar.Brand>
        
    <Form className="d-flex m-auto">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className="me-2 bg-warning-subtle border-warning"
              aria-label="Search"
            />
            <Button variant="outline-warning"><i class="bi bi-search"></i></Button>
          </Form>
          <LinkContainer to="cart">
          <Button className='border-0 cart-btn bg-transparent' variant="outline-warning">
            <h3>
              <i class="bi bi-bag-check"></i>
              <Badge className='text-dark' bg="transparent">{quantity}</Badge>
              </h3>
              </Button>
              </LinkContainer>
      </Container>
    </Navbar>
    <Navbar bg="light" expand="lg" className='navbar2'>
      <Container>
      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      Shop By Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto">
          <LinkContainer to="/">
            <Nav.Link href="#home">  HOME</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <Nav.Link href="#link">DEALS</Nav.Link>
            <Nav.Link href="#link">VENDORS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
    
        <Route path="cart" element={<Cart />} />
        <Route path="/details/:cid" element={<SingleData />} />
        
      </Routes>
    </>
  )
}

export default Header
