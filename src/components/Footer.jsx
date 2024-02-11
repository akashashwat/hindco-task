function Footer() {
  return (
    <section className="footer-container">
      <footer>
        <div className="footer-col">
          <div>
            <p className="footer-links">About Us</p>
            <p>This is about us</p>
            <p className="footer-links">About Us</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <button className="footer-bn">Request Brochure</button>
          </div>
          <div className="footer-middle">
            <p className="footer-links">Services</p>
            <p>This is services</p>
            <p className="footer-links">Clients</p>
            <p>consectetur</p>
            <p>adipiscing</p>
          </div>
          <div>
            <p className="footer-links">Connect with us</p>
            <div className="footer-icon">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-behance"></i>
            </div>
            <p className="footer-links">Connect with us</p>
            <div className="footer-icon">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-behance"></i>
            </div>
          </div>
        </div>
        <p className="footer-end">
          Made by Shubham Patel 🧡 {new Date().getFullYear()} <br />
          <span>All Right Reserved</span>
        </p>
      </footer>
    </section>
  );
}

export default Footer;
