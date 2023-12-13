import React from "react";
import './Header.css'
import NavBar from "./NavBar";
import ImageSection from "./ImageSection";

import SideBar from "../componants/SideBar";

import box from "../assets/SVG images/box.svg";
import health from "../assets/SVG images/health.svg";

export default function Header() {
  return (
    <header className="hero">
      <NavBar />
      <ImageSection />
      <div className="HeroContent">
        <h1 className="heroTitle">
          Votre comparateur d'assurance santé sénior
          <span> pour un choix éclairé.</span>
        </h1>
        <SideBar />
        <div className="heroText">
          <h3 className="heroPara">
            Comparatif mutuelle pour une décision d'assurance en toute confiance
            pour votre complémentaire santé sénior.
          </h3>

          <div className="boxes">
            <div className="box">
              <img src={box} alt="box" />
              <h4>Box internet</h4>
            </div>
            <div className="box">
              <img src={health} alt="health" />
              <h4>Mutuelle et santé</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
