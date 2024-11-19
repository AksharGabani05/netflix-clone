import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'transparent' }} className="text-white">
      <Container fluid className="px-3"> 
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" // Netflix logo URL
            alt="Netflix Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white custom-navbar-toggler" />

        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/tvshows" className="text-white">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="text-white">Movies</Nav.Link>
            <Nav.Link as={Link} to="/news" className="text-white">News & Popular</Nav.Link>
            <Nav.Link as={Link} to="/latest" className="text-white">Latest</Nav.Link>
          </Nav>

         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 border-1 rounded-pill px-3 py-2"
              aria-label="Search"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: '1px solid #555',
                transition: 'border-color 0.3s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#fff'}
              onBlur={(e) => e.target.style.borderColor = '#555'}
            />
            <Button 
              variant="outline-light" 
              className="ms-2 rounded-pill" 
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
