import about from "../assets/images/about.jpg";

function Services() {
  return (
    <div id="services-container">
      <div>
        <img src={about} alt="about-image" height="600px" width="758px" />
      </div>
      <div>
        <div className="products-content">
          <h5>Our Services</h5>
          <h4>What we do</h4>
          <div className="service-content">
            <div>
              <p className="service-links">Interface Designs</p>
              <p className="dark">
                Elevate your digital presence with visually captivating and
                user-friendly interface designs tailored to your brand's
                identity.
              </p>
            </div>
            <div>
              <p className="service-links">User Experience</p>
              <p className="dark">
                Craft seamless and intuitive experiences that resonate with your
                audience, ensuring every interaction leaves a lasting
                impression.
              </p>
            </div>
            <div>
              <p className="service-links">Development</p>
              <p className="dark">
                Bring your ideas to life with expert development solutions,
                meticulously crafted to meet your unique requirements and exceed
                your expectations.
              </p>
            </div>
            <div>
              <p className="service-links">Product Strategy</p>
              <p className="dark">
                Drive innovation and success with strategic guidance that aligns
                your product vision with market demands, setting the foundation
                for sustainable growth.
              </p>
            </div>
          </div>
          <button className="bn">See more</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
