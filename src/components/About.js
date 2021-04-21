import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/About.css";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const GetAbout = async () => {
      const { data } = await axios.get(
        "https://rocky-dusk-38121.herokuapp.com/Abouts"
      );
      setAbout(data[0]);
    };
    GetAbout();
  }, []);
  return (
    <div className="p-5" id="about">
      <div className="row block-header">
        <div className="col-sm-8 mx-auto text-center">
          <h1 className="display-4 mt-2">Las Flores Records</h1>
          <hr></hr>
        </div>
      </div>
      <br></br>
      <div className="row justify-content-center  align-items-center">
        <div className="col-md-6">
          <strong className="lead">{about.bio}</strong>
          <br></br>
        </div>
        <div className="col-md-5 order-md-first mt-1">
          <img
            className="imgbio"
            src={about.urlimg1}
            alt="imagen de biografia"
          ></img>
        </div>
      </div>
      <div className="row justify-content-center  align-items-center mt-5">
        <div className="col-md-6">
          <strong className="lead">{about.bio2}</strong>
          <br></br>
        </div>
        <div className="col-md-5 mt-1">
          <img
            className="imgbio"
            src={about.urlimg2}
            alt="imagen de biografia"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
