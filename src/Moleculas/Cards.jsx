import React from "react";
import { Link } from "react-router-dom";
import "../../styles/moleculas.css";  

export default function Cards({ cProps }) {
  return (
    <div className="cards_Container">
      {cProps.map((info, index) => (
        <div key={index} className="card_Cont">
          <div className="card_Img">
            {info.icon && <info.icon  style={{ fontSize: "160px", color: "rgb(1, 120, 70)" }} />}
          </div>
          <div className="text_Img">
            <h1>{info.tituloCard}</h1>
          </div>
          <div className="card_Btn">
            <Link to={info.link} className="Link-Raya">
              {info.titulo}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
