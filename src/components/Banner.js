// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import imgbanner from "../assets/banner.jpg";
export const Banner = () => {
  return (
    <div >

      <section className="banner" id="home">
        <div className="banner-content">
          
            <div className="text-center">
              <h2>DNC CONSTRUCCIONES</h2>
              <h1>Manejo integral de redes de agua potable y alcantarillado</h1>
              <p>Construyendo calidad de vida</p>
            </div>
          
        </div>
      </section>
    </div>
  );
};
