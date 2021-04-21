import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Hero.css";
import axios from "axios";

const Hero = () => {
  const [datos, setDatos] = useState({});
  useEffect(() => {
    const GetData = async () => {
      const { data } = await axios.get(
        "https://rocky-dusk-38121.herokuapp.com/portadas"
      );
      setDatos(data[0]);
    };
    GetData();
  }, []);
  return (
    <div
      id="hero"
      className="jumbotron jumbotron-fluid hero"
      style={{
        background: `url(${datos.urlbackground})`,
      }}
    >
      <div className="container-fluid hero mt-4">
        <div className="row header-row align-items-center justify-content-center">
          <div className="section-intro">
            <div style={{ width: "80%", margin: "auto" }}>
              <div className="logocontainer">
                <img
                  style={{ width: "100%" }}
                  className="img-fluid"
                  src={datos.urllogo}
                />
                <p>Recording Studio | Estudio de Grabación</p>
              </div>
            </div>
            <div className="flex-elem mt-5">
              <a href="https://www.instagram.com/lasfloresrecords/">
                <img
                  className="icon"
                  src="https://lh3.googleusercontent.com/bhMXgZliu72_fhyzni61U3OtCCXCHde80THsK_K8zLDVvf7MPxR5qWnyMhJNKw8W3Apeq3oNsL0I-cyF_2rMLj8sFg"
                ></img>
              </a>
              <a href="www.youtube.com">
                <img
                  className="icon"
                  src="https://lh3.googleusercontent.com/X3qCL_0lvmxwEvgvP1J9IaLYdhowL1YJBSVmV_iqNbrKhKUGh4jGFZ2ZcJssK7c7FT5dewzI9OLUE9K2i1TY5S3dBQ"
                ></img>
              </a>
              <a href="https://www.facebook.com/lasfloresrecords">
                <img
                  className="icon"
                  src="https://lh3.googleusercontent.com/5O14AJzPpnogx6_wCJ2dnSe_Rk4WH_gTXXOFiuEbvjlYY5ODF41RhuMC12xSQuUw-NQqwzV9B7quTu9XIEwcXvsCxwKDCnCzUF7XKQ"
                ></img>
              </a>
              <a href="https://open.spotify.com/playlist/3bLQzyJ7erhshGJFtzQ8Kv?si=qk_QUH0jSReCkMg3VbOllA">
                <img
                  className="icon"
                  src="https://lh3.googleusercontent.com/w5vpLtvRS-0GA_MF35KMwt46rdhCiEOdM3oC-ISPgF1JJ1imuOIwscuisyknto1UY_lSE_ytClVA9dKWCagwAO5ESrz1smtO3rlsQg"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
