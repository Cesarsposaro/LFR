import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Contact.css";
import axios from "axios";

const Contact = () => {
  const name = useRef("");
  const mail = useRef("");
  const message = useRef("");

  const submitHandler = () => {
    const data = {
      name: name.current.value,
      mail: mail.current.value,
      message: message.current.value,
    };
    if (
      name.current.value === "" ||
      mail.current.value === "" ||
      message.current.value === ""
    ) {
      alert("Debes ingresar todos los datos!");
      return;
    } else if (mail.current.value.indexOf("@") === -1) {
      alert("E-mail invalido!");
      return;
    } else {
      alert("post attempted!!");
      axios({
        method: "POST",
        url: "https://rocky-dusk-38121.herokuapp.com//emails",
        data: {
          sendTo: "lasfloresrecords@gmail.com",
          from: data.mail,
          text: data.message,
          name: data.name,
        },
      }).then((response) => {
        if (response.data.status === "sent") {
          alert("Message Sent");
        } else if (response.data.status === "failed") {
          alert("Message Failed");
        }
      });
      name.current.value = "";
      mail.current.value = "";
      message.current.value = "";
    }
  };

  return (
    <div
      className="container fluid"
      style={{ padding: "5px", marginBottom: "25px" }}
      id="contact"
    >
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-6 center p-5">
          <h1>Contactanos!</h1>
          <br></br>
          <p>
            Si querés consultar por cualquiera de nuestros servicios dejanos un
            mensaje y nos contactaremos a la breverdad{" "}
          </p>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6">
          <form className="form-container">
            <label for="name">Nombre</label>
            <input ref={name} type="text" id="name" />
            <br></br>
            <label for="email">E-mail</label>
            <input ref={mail} type="email" />
            <small>no compartiremos tu email con nadie</small>
            <br></br>
            <label for="name">Mensaje</label>
            <textarea ref={message} rows="4" cols="50" />
            <br></br>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                submitHandler();
              }}
              className="btn btn-success"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
