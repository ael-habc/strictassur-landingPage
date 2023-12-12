import React from "react";
import NavBar from "../componants/NavBar";
import ImageSection from "../componants/ImageSection";

import SideBar from "../componants/SideBar";

import box from "../assets/SVG images/box.svg";
import health from "../assets/SVG images/health.svg";

import vector from "../assets/SVG images/Vector.svg";

import SectionData from "../jsonFiles/Section1.json";

import Section1Box from "../componants/Section1Box";

export default function Home() {
  console.log(SectionData);
  return (
    <>
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
              Comparatif mutuelle pour une décision d'assurance en toute
              confiance pour votre complémentaire santé sénior.
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
      <main>
        <div className="section1">
          <div className="section1Text">
            <h2 className="section1Title">
              <img src={vector} alt="vector" />
              Avec Strict assur,<span> comparer, c'est gagner.</span>
            </h2>
          </div>
          <div className="section1Cards">
            {SectionData.section1.map((item, index) => {
              return <Section1Box key={index} props={item} />;
            })}
          </div>
        </div>
        <div className="section2">
          <div className="section1Text">
            <h2 className="section1Title">
              <img src={vector} alt="vector" />
              Comparez les assurances avec Strict assur
            </h2>
          </div>
          <h3 className="section2P">
            Comparateur leader sur le marché depuis plusieurs années, on peut
            vous dire que chez Strict assur, la comparaison d'assurance on s'y
            connaît ! Avec plus d'une centaine d'assureurs partenaires, nous
            trouvons facilement pour vous une offre d'assurance sur-mesure. En
            moins de 10 minutes, nous comparons pour vous des milliers de devis
            d'assurance pour ne sélectionner que les plus pertinents. Choisissez
            celui qui vous convient et nous vous mettons directement en contact
            avec votre nouvel assureur pour souscrire votre contrat et
            bénéficier de ses conseils. Notez que, pour tous nos produits
            d'assurance, le prix affiché est celui que vous allez payer, sans
            commission, ni frais cachés.
          </h3>
        </div>
      </main>
    </>
  );
}
