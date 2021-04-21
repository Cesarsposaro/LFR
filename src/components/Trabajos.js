import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Trabajos.css";
import axios from "axios";
import SpotifyReactPlayer from "react-spotify-player";

const Trabajos = (onMoreInfoClick) => {
  const [ind, setInd] = useState(0);
  const [discos, setDiscos] = useState([]);
  const [modal, setModal] = useState("hide");
  useEffect(() => {
    const GetDiscos = async () => {
      const { data } = await axios.get(
        "https://rocky-dusk-38121.herokuapp.com/trabajos"
      );
      setDiscos(data);
    };
    GetDiscos();
  }, []);
  const clickHandler = (ind) => {
    setModal("show");
    setInd(ind);
  };
  const showdiscos = discos.map((disco, index) => {
    return (
      <div className="col-xs-12 col-md-2 col-lg-2 disc" key={disco.id}>
        <div className={`${modal} moreinfo container-fluid`}>
          <button
            className="btn btn-dark"
            onClick={() => {
              setModal("hide");
            }}
          >
            &times;
          </button>
          <br></br>
          <div className="mt-4 p-4 row header-row align-items-center justify-content-center">
            <div
              className="col-xs-12 col-md-    6 col-lg-6"
              style={{ textAlign: "center" }}
            >
              <img
                alt="album cover"
                className="img-fluid"
                src={discos[ind].urlcover}
              />
            </div>
            {/*end of col*/}
            <div className="col-xs-12 col-md-6 col-lg-6 disc-container">
              <h1>{discos[ind].titulo}</h1>
              <h5>{discos[ind].Artista}</h5>
              <br></br>
              <p>{discos[ind].descripcion}</p>
              <br></br>
              <div className="text-center">
                <SpotifyReactPlayer
                  uri={`spotify:album:${discos[ind].spotifycode}`}
                  size="compact"
                  view="coverart"
                  theme="white"
                />
              </div>
            </div>
          </div>
        </div>
        <img className="img-fluid cover" src={disco.urlcover} />
        <div className="info">
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => {
              clickHandler(index);
            }}
          >
            VER MAS
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container-fluid" id="works">
      <div className="row block-header">
        <div className="col-sm-8 mx-auto text-center">
          <h1 className="display-4 mt-2">Trabajos</h1>
          <hr></hr>
          <p className="lead">
            A continuación podrán ver cada uno de los trabajos realizados en el
            estudio
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div
        className="row  container-fluid card-container mx-auto text-center"
        style={{ width: "100%" }}
      >
        {showdiscos}
      </div>
    </div>
  );
};

export default Trabajos;
