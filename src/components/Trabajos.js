import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Trabajos.css";
import SpotifyReactPlayer from "react-spotify-player";

const Trabajos = ({ workData }) => {
  const [ind, setInd] = useState(0);
  const [modal, setModal] = useState("hide");
  const spotify = (
    <SpotifyReactPlayer
      uri={`spotify:album:${workData[ind].spotifycode}`}
      size="compact"
      view="coverart"
      theme="white"
    />
  );

  const clickHandler = (ind) => {
    setModal("show");
    setInd(ind);
  };
  const showdiscos = workData.map((disco, index) => {
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
                src={workData[ind].urlcover}
              />
            </div>

            {/*end of col*/}
            <div className="col-xs-12 col-md-6 col-lg-6 disc-container">
              <h1>{workData[ind].titulo}</h1>
              <h5>{workData[ind].Artista}</h5>
              <br></br>
              <p>{workData[ind].descripcion}</p>
              <br></br>
              <div className="text-center">{spotify}</div>
            </div>
          </div>
        </div>
        <img
          alt="Album cover"
          className="img-fluid cover"
          src={disco.urlcover}
        />
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
