import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Trabajos from "./components/Trabajos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import About from "./components/About";
import "./App.css";
import useStrapi from "./utilities/useStrapi";

function App() {
  const heroData = useStrapi("portadas");
  const aboutData = useStrapi("abouts");
  const workData = useStrapi("trabajos");
  const serviceData = useStrapi("services");
  if (
    heroData.loading ||
    aboutData.loading ||
    workData.loading ||
    serviceData.loading
  ) {
    return (
      <div className="loading">
        <img
          alt="Company logo"
          src="https://lh3.googleusercontent.com/9Hi_SWDZYSD5Jgx1v2I-s2lgwqMYCH6FuL52NYuJY5iht7d68roH1KfvH00qDConzHF5dsmxRys1z3X5UUnwmrEuq0wZbKqZ_D4Q14A"
        />
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <br></br>
        <p>Loading, please wait</p>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Hero heroData={heroData.response[0]} />
      <About aboutData={aboutData.response[0]} />
      <br></br>
      <br></br>
      <Servicios serviceData={serviceData.response} />
      <br></br>
      <br></br>
      <Trabajos workData={workData.response} />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
