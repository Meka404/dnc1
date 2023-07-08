import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../css/Navigation2.css';
import logo from '../assets/dnc.jpg';

export const Navigation2 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <Navbar.Brand href="#home">DNC Construcciones</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Inspeccion televisiva
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Topografia Integral
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Saneamiento ambiental
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

