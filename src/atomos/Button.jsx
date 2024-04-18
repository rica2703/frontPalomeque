import React from "react";
import "../../styles/atomos.css";

export default function Button({ bProps }) {
  return (
    <>
      {bProps.map((info) => (
        <button onClick={info.onClick} className={info.style}>
          <h3
            style={{
              color: "white",
            }}
          >
            {info.nombre}
          </h3>
        </button>
      ))}
    </>
  );
}
