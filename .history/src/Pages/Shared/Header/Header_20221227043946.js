import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  
  const handelSignOut = () =>{
    logOut()
    .then()
    .catch(err => {
      console.error(err);
    })
  }
    return (
         
          <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/service">Service</Nav.Link>
                    
                    <Nav.Link href="/about">
                      About
                    </Nav.Link>
                    <Nav.Link href="/blog">
                      Blog
                    </Nav.Link>
                    <Nav.Link href="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link href="/myreview">
                      My-review
                    </Nav.Link>
                    <Button variant="outline-success">Search</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         
          
    );
};

export default Header;