import React, { useEffect, useState } from "react";
import "../css/Portada4.css";
import red3 from "../assets/saneamiento1.jpg";
import red2 from "../assets/topografia1.jpg";
import red1 from "../assets/televisiva12.jpg";
import red4 from "../assets/agua.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
export const Portada4 = () => {
  return (
    <Carousel className="grupo">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red1} alt="First slide" />
        <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>INSPECCION TELEVISIVA</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red2} alt="Second slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>TOPOGRAFIA</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
       
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red3} alt="Third slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>SANEAMIENTO AMBIENTAL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
