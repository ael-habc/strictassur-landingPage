import React from "react";

export default function ActualityCard({ props }) {
  const { image,title, text } = props;
  

  return (
    <div className="actualityCard">
      <div className="actualityImg">
        <img src={require(`../assets/SVG images/${image}.png`)} alt="actuality" />
        <div className="line"></div>
      </div>
      <h3>{title}</h3>
      <h3>{text}</h3>
    </div>
  );
}
