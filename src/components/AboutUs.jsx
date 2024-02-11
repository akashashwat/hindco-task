import productTwo from "../assets/images/team.jpg";

function AboutUs() {
  return (
    <div id="about-us">
      <div className="products-content">
        <h5>About Us</h5>
        <h4>Meet the Team</h4>
        <p>
          “Meet the Team” or an About Us page, when focused on team culture and
          skills, serves as a window into the heart of your agency. It’s a
          showcase of your company’s culture, values, and the collective
          expertise that defines your team.
        </p>{" "}
        <p>
          {" "}
          This approach builds a narrative around your team, illustrating how
          each member’s unique skills and personalities contribute to the
          agency’s vision and success. By highlighting these aspects, the page
          becomes a platform for sharing your agency’s ethos and philosophy,
          inviting visitors to understand and connect with your team on a deeper
          level.
        </p>
        <button className="bn">Learn more</button>
      </div>
      <div>
        <img src={productTwo} width="755px" alt="product-image" />
      </div>
    </div>
  );
}

export default AboutUs;
