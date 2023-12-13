import React from "react";
import "./NavBar.css";

import Logo from "../assets/SVG images/Logo";

export default function NavBar() {
  return (
    <div className="navbar">
      <Logo width={206} height={62}/>
      <div className="navbar__links">
        <a href="/">Accueil</a>
        <a href="/">Conseil gratuit</a>
        <a href="/">Contactez nous</a>
      </div>
    </div>
  );
}
