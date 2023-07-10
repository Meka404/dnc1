import React, { useEffect, useState } from "react";
import "../css/Portada4.css";
import red1 from "../assets/construccion2.jpg";
import red2 from "../assets/balde.jpg";
import red3 from "../assets/televisiva12.jpg";
import red4 from "../assets/agua.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const Portada4 = () => {
  return (
  
      <Carousel className="grupo">
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={red1} alt="First slide" />
          <Carousel.Caption>
            <h3>Inspeccion televisiva</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={red2} alt="Second slide" />
          <Carousel.Caption>
            <h3>TOPGRAFIA</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={red3} alt="Third slide" />
          <Carousel.Caption>
            <h3>SANEAMIENTO AMBIENTAL</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  );
};
