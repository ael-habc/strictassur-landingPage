import React from 'react'
import './Actuality.css'

import ActualityData from "../jsonFiles/Actuality.json";
import ActualityCard from "../componants/ActualityCard";

export default function Actuality() {
  return (
    <div className="actuality">
          <h3>Actualités</h3>
          <div className="actualityCards">
            {ActualityData.actuality.map((item, index) => {
              return <ActualityCard key={index} props={item} />;
            })}
          </div>
        </div>
  )
}
