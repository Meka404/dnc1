// import Container from "react-bootstrap/esm/Container"


import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import dnc from "../assets/dnc.jpg";
import { startTransition } from "react";
export const Portada1 = () => {
  return (
    <div className="portada1" id="home">

        
        <img src={dnc} alt="imagen1"></img>

    </div>
  );
};
