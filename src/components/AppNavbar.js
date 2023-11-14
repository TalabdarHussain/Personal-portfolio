import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavScrollExample = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#" style={{ color: '#9B51E0' }}>FASTECH</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#profile">MY PROFILE</Nav.Link>
          <Nav.Link href="#activity">ACTIVITY</Nav.Link>
          <Nav.Link href="#how-it-works">HOW IT WORKS</Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Button variant="outline-success" className="me-2">
            Create
          </Button>
          <Button variant="outline-primary">Sign In</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavScrollExample;
