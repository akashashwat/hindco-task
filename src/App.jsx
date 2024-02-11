import "./App.css";
import Services from "./components/Services";
import Banner from "./components/Banner";
import NavBar from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Banner />
      <Products />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
