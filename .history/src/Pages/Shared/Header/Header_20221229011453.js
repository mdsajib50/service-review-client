import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import logo from '../../../assets/image/physical-therapy.jpg';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
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
                <Navbar.Brand href="#">
                  <img  src={logo} alt="" srcset=""/>
                </Navbar.Brand>
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
                   { 
                    user?.email ?
                   <><Nav.Link href="/myreview">
                   My-review
                 </Nav.Link>
                 <Button onClick={handelSignOut} variant="outline-success">Log Out</Button>
                 </> :
                    <Nav.Link href="/login">
                      Login
                    </Nav.Link>
                    }
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         
          
    );
};

export default Header;