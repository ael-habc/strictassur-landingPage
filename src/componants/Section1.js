import React from 'react'
import './Section1.css'

import vector from "../assets/SVG images/Vector.svg";

import SectionData from "../jsonFiles/Section1.json";

import Section1Box from "../componants/Section1Box";

export default function Section1() {
  return (
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
  )
}
