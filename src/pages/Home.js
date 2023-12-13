import React from "react";

import Header from "../componants/Header";
import Section1 from "../componants/Section1";
import Section2 from "../componants/Section2";
import Actuality from "../componants/Actuality";
import Footer from "../componants/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Actuality />
        <h3 className="opening">
          HORAIRES D’OUVERTURE POUR LA RÉCEPTION: lundi au vendredi 10h a 14h et
          16h a 19hSamedi 10h a 14h
        </h3>
        <Footer />
      </main>
    </>
  );
}
