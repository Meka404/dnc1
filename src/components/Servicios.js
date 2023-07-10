import {Container,Row,Col} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import red1 from "../assets/topografia1.jpg";

import red2 from "../assets/saneamiento1.jpg";
import red3 from "../assets/televisiva4.jpg";
export const Servicios = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
      return(
        <section className="servicios" id="servicios">
            
                <Row>
                    <Col>
                        <div className="servicios-bx">
                            <h2>
                              
                              Nuestros Servicios 
                            
                              </h2>
                            <p>Ofrecemos los siguientes servicios</p>
                            <Carousel responsive={responsive} infinite={true} className="servicios-slider">
                                <div className="item">
                                    <img src={red1} alt="imagen1"/>
                                    <h5>TOPOGRAFIA INTEGRAL</h5>
                                </div>
                                <div className="item">
                                    <img src={red2} alt="imagen2"/>
                                    <h5>SANEAMIENTO AMBIENTAL</h5>
                                </div>
                                <div className="item">
                                    <img src={red3} alt="imagen3"/>
                                    <h5>INSPECCION TELEVISIVA</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            

        </section>
      )
};
