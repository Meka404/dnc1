import {Container,Row,Col} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import red1 from "../assets/construccion2.jpg";

import red2 from "../assets/balde.jpg";
import red3 from "../assets/televisiva12.jpg";
export const Portada3 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <Container>
        <section className="portada3" >
            
                <Row>
                    <Col>
                        <div className="portada3-bx">
                        
                        
                            <Carousel responsive={responsive} infinite={true} className="portada3-slider">
                                <div className="item">
                                    <img src={red1} alt="imagen1"/>
                                    
                                </div>
                                <div className="item">
                                    <img src={red2} alt="imagen2"/>
                                    
                                </div>
                                <div className="item">
                                    <img src={red3} alt="imagen3"/>
                                    
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            

        </section>
        </Container>
      )
};
