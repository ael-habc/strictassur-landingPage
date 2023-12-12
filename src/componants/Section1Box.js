import React from "react";

import "./Section1Box.css";

 import img from "../assets/SVG images/section1.svg"

export default function Section1Box({props}) {
    const {imgLink, title, text} = props
    console.log(`../assets/SVG images/${imgLink}.svg`)
  return (
    <div className="section1Box">
        <img src={require(`../assets/SVG images/${imgLink}.svg`)} alt="section1" />
      <div className="section1BoxText">
        <h3>{title}</h3>
        <h3>
          {text}
        </h3>
      </div>
    </div>
  );
}
