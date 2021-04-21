import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Trabajos from "./components/Trabajos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <br></br>
      <br></br>
      <Servicios />
      <br></br>
      <br></br>
      <Trabajos />
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
