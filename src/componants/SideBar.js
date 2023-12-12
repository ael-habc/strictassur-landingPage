import React from "react";
import chat from "../assets/SVG images/Layer 6.svg";
import phone from "../assets/SVG images/Layer 5.svg";
import mail from "../assets/SVG images/Layer 4.svg";
import layer from "../assets/SVG images/Layer 3.svg";


export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="imgBox">
        <img src={layer} alt="layer" />
      </div>
      <div className="imgBox">
        <img src={chat} alt="chat" />
      </div>
      <div className="imgBox">
        <img src={phone} alt="phone" />
      </div>
      <div className="imgBox">
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
}
