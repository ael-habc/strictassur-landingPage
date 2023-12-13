import React from "react";

import "./Section1Box.css";


export default function Section1Box({props}) {
    const {imgLink, title, text} = props
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
