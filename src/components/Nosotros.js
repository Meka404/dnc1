// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import logo1 from "../assets/grupo.jpg";

import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Nosotros = () => {


  return (
    <Container>
    <div className="two-column">
      <div className="column" id="nosotros">
        <h3>DNC construcciones</h3>
        <p> 
          empresa comprometida con el desarrollo ético y sostenible de su
          actividad principal: consultoría y construcción, su alto nivel técnico
          de sus profesionales debidamente capacitados y en continua
          preparación, se reflejan en el desarrollo de sus múltiples servicios,
          tales como; manejo integral de la redes de alcantarillado y agua
          potable, saneamiento ambiental, topografía y geodesia, geotecnia en
          diseño de cimentaciones y vías de transporte, ingeniería de
          pavimentos, supervisión de obras, diseño y ejecución de obras públicas
          y privadas, etc. Junto al equipo y maquinaria del que dispone, ser
          parte del desarrollo de sistemas que permitan facilitar la operación y
          ejecución de obras así su administración y mantenimiento. El ámbito
          inicial de sus operaciones se va a concentrar en la contratación y
          ejecución de obras públicas y privadas a nivel nacional.
        </p>
      </div>
      <div className="column">
        <img src={logo1} alt="Imagen de la segunda columna" />
      </div>
    </div>
    </Container>
  );
};
