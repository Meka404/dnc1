import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';
import '../css/Navigation3.css';
import logo from '../assets/dnc.jpg';

export const Navigation3 = () => {
    return (
        <div className="navigation-container">
       
            <Navbar className="navegacion3">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">INICIO</Nav.Link>
                  <Nav.Link href="#link">QUIENES SOMOS</Nav.Link>
                  <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">PROYECTOS</Nav.Link>
                  <Nav.Link href="#link">CONTACTANOS</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
      
        </div>
      );
  
};