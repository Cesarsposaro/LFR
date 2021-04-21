import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, slideInRight, slideInLeft } from "react-animations";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Navbar.css";
import axios from "axios";
import { debounce } from "../utilities/helpers";

const Navbar = () => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [logo, setLogo] = useState("");

  const Toggle = () => {
    if (dropdown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (scroll more than 70px up or be in the first 10px of the site)
    setVisible(
      (prevScroll > currentScrollPos && prevScroll - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setDropdown(false);
    // set state to new scroll position
    setPrevScroll(currentScrollPos);
  }, 100);
  useEffect(() => {
    const GetLogo = async () => {
      const { data } = await axios.get(
        "https://rocky-dusk-38121.herokuapp.com/portadas"
      );
      setLogo(data[0]);
      console.log(data);
    };
    GetLogo();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll, visible, handleScroll]);

  return (
    <div>
      <div className="navbar lg-scr" style={{ top: visible ? "0" : "-60px" }}>
        <img src={logo.urllogo}></img>
        <a href="/#hero">Inicio &nbsp;</a>
        <strong>|</strong>
        <a href="/#about">&nbsp;Biografia&nbsp;</a>
        <strong>|</strong>
        <a href="/#services">&nbsp;Servicios&nbsp;</a>
        <strong>|</strong>
        <a href="/#works">&nbsp;Trabajos&nbsp;</a>
        <strong>|</strong>
        <a href="/#contact">&nbsp;Contacto</a>
        <br></br>
      </div>
      <div className="navbar sm-scr" style={{ top: visible ? "0" : "-60px" }}>
        <img src={logo.urllogo}></img>
        <div
          className="drop-menu"
          style={{
            left: dropdown ? "0px" : "-1000px",
            top: visible ? "50px" : "-180px",
          }}
        >
          <a href="/#hero">Inicio</a>
          <hr className="divisor"></hr>
          <a href="/#about">Biografia</a>
          <hr className="divisor"></hr>
          <a href="/#services">Servicios</a>
          <hr className="divisor"></hr>
          <a href="/#works">Trabajos</a>
          <hr className="divisor"></hr>
          <a href="/#contact">Contacto</a>
        </div>
        <div
          className="menu-button"
          onClick={() => {
            Toggle();
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
