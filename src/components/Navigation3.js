import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../css/Navigation3.css";

export const Navigation3 = () => {
  return (
    <Container className="navega3">
          <Nav className="navega33 ml-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">INSPECCION TELEVISIVA </NavDropdown.Item>
              <NavDropdown.Item href="#action/2">SANEAMIENTO AMBIENTAL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">TOPOGRAFIA INTEGRAL</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#proyectos">PROYECTOS</Nav.Link>
            <Nav.Link href="#footer">UBICANOS</Nav.Link>
          </Nav>
       
   
    </Container>
  );
};
