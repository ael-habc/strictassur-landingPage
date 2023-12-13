import React from 'react'
import './Footer.css'
import Logo from "../assets/SVG images/Logo";

import facebook from "../assets/SVG images/FB 1.svg";
import instagram from "../assets/SVG images/INS 1.svg";
import linkdin from "../assets/SVG images/IN 1.svg";
import tiktok from "../assets/SVG images/TK 1.svg";

export default function Footer() {
  return (
    <footer>
    <div className="footerContent">
      <h3>Newsletter</h3>
      <form className="formulaire">
        <div className="inputSec">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" />
        </div>
        <div className="inputSec">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" />
        </div>
        <div className="inputSec">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" />
        </div>
        <button type="submit">S'abonner</button>
      </form>
    </div>
    <div className="footer_end">
      <div className="socialMedia">
        <Logo />
        <div className="contact">
          <h3>Téléphone:</h3>
          <h3>(+33)177931992</h3>
        </div>
        <div className="contact">
          <h3>Adresse:</h3>
          <h3>78, Avenue Henri Martin</h3>
          <h3>Paris, 75116, France</h3>
        </div>
        <div className="socialIcons">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkdin} alt="linkdin" />
          <img src={tiktok} alt="tiktok" />
        </div>
      </div>
      <div className="bosoins">
        <h3 className="title">VOS BESOINS</h3>
        <div className="content">
          <h3>Assurance santé</h3>
          <h3>Protection familiale</h3>
          <h3>Assurance obsèques</h3>
          <h3>Assurance emprunteur</h3>
        </div>
      </div>
      <div className="bosoins">
        <h3 className="title">SERVICES</h3>
        <div className="content">
          <h3>Conseil gratuit</h3>
          <h3>Indépendance</h3>
          <h3>Garanties</h3>
        </div>
      </div>
      <div className="bosoins">
        <h3 className="title">DEVIS & RÉCLAMATION</h3>
        <div className="content">
          <h3>Demander un devis</h3>
          <h3>Réclamation</h3>
          <h3>Ethique & compliance</h3>
        </div>
      </div>
    </div>
    <h3 className="copyRight">
      Copyright © 2023 StrictAssur . N° ORIAS 16000253 . CGU . Protection
      des Données Personnelles . Mentions légales.
    </h3>
  </footer>
  )
}
