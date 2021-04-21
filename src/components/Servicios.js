import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Servicios.css";
import axios from "axios";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    const GetServicios = async () => {
      const { data } = await axios.get(
        "https://rocky-dusk-38121.herokuapp.com/services"
      );
      setServicios(data);
    };
    GetServicios();
  }, []);
  const showservicios = servicios.map((servicio) => {
    return (
      <div
        className="col-xs-12 col-md-3 col-lg-3 service-container"
        key={servicio.id}
      >
        <img className="img-fluid" src={servicio.urlimg} />
        <br></br>
        <h5>{servicio.titulo}</h5>
        <br></br>
        <p>{servicio.descripcion}</p>
        <br></br>
        <a
          href="/#contact"
          className="btn btn-success"
          style={{ width: "80%" }}
        >
          Contactar
        </a>
        <br></br>
      </div>
    );
  });
  return (
    <div id="services">
      <div className="row block-header">
        <div className="col-sm-8 col-xs-12 mx-auto text-center">
          <h1 className="display-4 mt-2">Servicios</h1>
          <hr style={{ width: "80%" }}></hr>
          <p className="lead">
            En Las Flores Records ofrecemos una gran variedad de servicios,
            producción, grabación, mastering, música original, entre otros.
          </p>
        </div>
      </div>
      <div
        className="row  container-fluid card-container mx-auto text-center"
        style={{ width: "100%" }}
      >
        {showservicios}
      </div>
    </div>
  );
};

export default Servicios;
