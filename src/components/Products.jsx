import productOne from "../assets/images/product.jpg";

function Products() {
  return (
    <section id="products-container">
      <div className="products-row-1">
        <div>
          <img src={productOne} alt="product-image" width="755px" />
        </div>
        <div>
          <div className="products-content">
            <h5>Products</h5>
            <h4>Watch Application</h4>
            <p className="dark">
              {" "}
              With more than 10 years experience in the field, Withing invents,
              designs, and new entry manufactures a range of award-winning.
            </p>
            <p className="dark">
              Come clinically validated smart health devices and associated
              apps. Withings provides an the comfort of home, and can help
              anyone master long term health goals.
            </p>
            <p className="dark">
              Ready to discover the epitome of style and sophistication? Explore
              our curated collection of watches and find the perfect timepiece
              to elevate your everyday moments.{" "}
            </p>
            <p className="dark">
              While our watches are undeniably stylish, they are also highly
              functional. Shop now and make a statement with a watch that stands
              the test of time.
            </p>
            <div className="btn-container">
              <button className="bn">Request a demo</button>
              <button className="bn-color">View All Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
