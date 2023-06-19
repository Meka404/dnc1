import { Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-info">
            <h3>CONTACTO</h3>
            
            <br></br>
            <h5>
              Calle Isaac Newton 7109, Urb. Sol de Oro - Los Olivos - Lima
            </h5>
          
            <br></br>
            <h5>Telefono: 989004323</h5>
            <h5>email: proyectos@dncconstrucciones.com</h5>

            <div className="social-links pt-3">
              <a
                href="https://www.facebook.com/Dnc.construcciones"
                target="_blank"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              
            </div>
           
          </div>

          <div className="col-md-4 footer-links">
            <h4>SERVICIOS</h4>
            <br></br>
            <ul>
              <h5>Manejo Integral de Redes de Agua Potable y Alcantarillado</h5>
              <br></br>
              <h5>Saneamiento Ambiental</h5>
              <br></br>
              <h5>Topografía, Geodesia y Fotogametria</h5>
            </ul>
          </div>

          <div className="col-md-4 footer-contact">
            <h4>DNC CONSTRUCCIONES</h4>
            
              <p className="text-center">
                Es una empresa comprometida <br />
                con el desarrollo ético <br />
                y sostenible de su <br />
                actividad principal: <br />
                Consultoría y Construcción
                <br />
              </p>
            
          </div>
        </div>
      </div>

      <div className="container py-1 ">
        <div className="text-center">
          <p className="company-name text-center ">© DNC CONSTRUCCIONES</p>
        </div>
      </div>
    </footer>
  );
};
