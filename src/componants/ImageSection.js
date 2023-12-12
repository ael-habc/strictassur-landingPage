import React from "react";
import Vector1 from "../assets/SVG images/Vector (1).svg";
import Vector2 from "../assets/SVG images/Vector (3).svg";

export default function ImageSection() {
  return (
    <div>
      <img src={Vector1} alt="Vector1" className="vector11 vector" />
      <img src={Vector1} alt="Vector1" className="vector12 vector" />
      <img src={Vector1} alt="Vector1" className="vector13 vector" />
      <img src={Vector1} alt="Vector1" className="vector14 vector" />
      <img src={Vector1} alt="Vector1" className="vector15 vector" />
      <img src={Vector2} alt="Vector2" className="vector21 vector" />
      <img src={Vector2} alt="Vector2" className="vector22 vector" />
      <img src={Vector2} alt="Vector2" className="vector23 vector" />
      <img src={Vector2} alt="Vector2" className="vector24 vector" />
    </div>
  );
}
