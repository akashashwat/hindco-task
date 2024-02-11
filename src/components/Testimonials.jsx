import Carousel from "react-bootstrap/Carousel";

function Testimonials() {
  return (
    <section className="testimonial-container">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="testimonial-carousel">
            <div className="testimonial-slide">
              <img
                className="d-block"
                src="https://i.pravatar.cc/100?u=118836"
                alt="carousel-image"
              />
              <p>
                They have a plethora of watches and accessories. My recent
                purchase was a limited edition and I didn't realize it until I
                got it. It is a combo set which included a watch winder shaped
                like a racing helmet which works great. Cadola watches have been
                around since the Sixties and I'm glad I found this set.
              </p>
            </div>
            <div className="testimonial-slide">
              <img
                className="d-block"
                src="https://i.pravatar.cc/100?u=933372"
                alt="carousel-image"
              />
              <p>
                Beautiful watch all around luminosity is superb as far as size
                41 mm this watch falls short for me I am use to wear 45 mm and
                above this more like ladies watch, but that's my preference
                overall nice experience.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="testimonial-carousel">
            <div className="testimonial-slide">
              <img
                className="d-block"
                src="https://i.pravatar.cc/100?u=1836"
                alt="carousel-image"
              />
              <p>
                I’ve been a high-end watch collector for 50 years and have
                purchased from many retailers, dealers and wholesalers. This is
                by far the best watch dealer I’ve ever dealt with. They are
                extremely knowledgeable and helpful, providing outstanding
                advice and the ability to access almost any brand you would
                want.
              </p>
            </div>
            <div className="testimonial-slide">
              <img
                className="d-block"
                src="https://i.pravatar.cc/100?u=9372"
                alt="carousel-image"
              />
              <p>
                Excellent experience. I was quoted the best price and received a
                delivery the next day after my payment cleared. I was somewhat
                skeptical about purchasing an expensive watch online, but it was
                easy and saved me a substantial amount. I will buy from this
                dealer again.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;
