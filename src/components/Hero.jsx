import Carousel from "react-bootstrap/Carousel";
import slideOne from "../assets/images/hero.jpg";
import slideTwo from "../assets/images/hero-1.jpg";
import slideThree from "../assets/images/hero-2.jpg";

function Hero() {
  return (
    <section id="carousel-container">
      <HeroCarousel />
    </section>
  );
}

function HeroCarousel() {
  return (
    <div id="carousel-hero">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={slideOne} alt="carousel-image" />
          <Carousel.Caption>
            <h1>Award Winning Agency</h1>
            <p>
              Experience the perfect blend of style and precision with out
              exquite collection.
            </p>
            <button className="footer-bn">Download this template</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={slideTwo} alt="carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="carousel-image"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
