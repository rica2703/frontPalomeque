import React from "react";
import { Link } from "react-router-dom";
import "../../styles/moleculas.css";
import Button from "../atomos/Button";

export default function Cards({ cProps }) {
  const bProps = [
    {
      nombre: "Iniciar",
      style: "Button",
    },
  ];

  return (
    <>
      <div className="cards_Container">
        {cProps.map((info) => (
          <>
            <div className="card_Cont">
              <div className="card_Img">
                <img src={info.url} alt="hols" className="Img" />
              </div>
              <div className="text_Img">
                <h1> {info.tituloCard}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <a href={info.link} className="Link-Raya">{info.titulo}</a>

    
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}