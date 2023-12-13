import React from 'react'

import './Section2.css'

import vector from "../assets/SVG images/Vector.svg";

import section21 from "../assets/SVG images/Mut 1.svg";
import section22 from "../assets/SVG images/Asset 3 1.svg";

export default function Section2() {
  return (
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

          <div className="section2Cards">
            <div className="section2Card">
              <img src={section21} alt="section21" />
              <div className="section2CardContent">
                <h3>Mutuelle et santé</h3>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </h3>
                <button>Comparer</button>
              </div>
            </div>
            <div className="section2Card">
              <img src={section22} alt="section21" style={{ order: 2 }} />
              <div className="section2CardContent">
                <h3>Box internet</h3>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting
                </h3>
                <button>Comparer</button>
              </div>
            </div>
          </div>
          <div className="section1Text" style={{ marginTop: "102px" }}>
            <h2 className="section1Title">
              <img src={vector} alt="vector" />
              Comparez les assurances avec Strict assur
            </h2>
          </div>
          <h3 className="section2P">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </h3>
        </div>
  )
}
