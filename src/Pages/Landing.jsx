import React from "react";
import "../../styles/atomos.css"
import Button from "../atomos/Button";
import Contenido from "../organismo/Contenido";

export default function Landing() {
  const bProps = [{}];
  const bProps2 = [{}];
  return (
    <>
      <div className="bigContainer">
        <div className="containerLanding">
          <header className="headerLanding">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
                marginLeft: "-3.5%",
              }}
            >
              <h1
                style={{
                  color: "green",
                }}
              >
                RentLaR!
              </h1>
            </div>
            <div
              className="tituloLanding"
              style={{ marginLeft: "35%", marginTop: "50px" }}
            >
              <h1
                style={{
                  fontSize: "2em",
                  fontFamily: "Newsreader",
                  fontWeight: "bold",
                }}
              >
                ¡Bienvenido Emprendedor!
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "flex-end",
                }}
              >
                <Button bProps={bProps} />
              </div>
            </div>
          </header>

          <section>
            <Contenido />
          </section>
        </div>
      </div>
    </>
  );
}

