import React from "react";
import "./NavBar.css";

import Logo from "../assets/SVG images/Logo";

export default function NavBar() {
  console.log(104.87 - 54.288 - 22.21)
  return (
    <div className="navbar">
      <Logo />
      <div className="navbar__links">
        <a href="#">Accueil</a>
        <a href="#">Conseil gratuit</a>
        <a href="#">Contactez nous</a>
      </div>
    </div>
  );
}
