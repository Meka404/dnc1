import React from 'react';
import sedapal from '../assets/logo_sedapal.jpg';
import controloria from '../assets/controloria.jpg';
import gitec from '../assets/gitec.jpg';
import ministerio from '../assets/ministerio.jpg';
import { Container, Row, Col } from "react-bootstrap";
export const Clientes = () => {
  const images = [
    { src: sedapal, alt: 'SEDAPAL' },
    { src: controloria, alt: 'Controloría' },
    { src: gitec, alt: 'GITEC' },
    { src: ministerio, alt: 'Ministerio' },
  ];

  return (
    <section className="clientes" id="clientes">
      <Container>
      <div className="row gy-4">
        {images.map((image, index) => (
          <div key={index} className="col-xl-3 col-md-6 client-logo">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};