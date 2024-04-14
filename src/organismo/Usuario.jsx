import React from "react";
import Cards from "../Moleculas/Cards";


export default function Usuario() {
  const cProps = [
    {
      tituloCard: "Perfil",
      url: "https://www.psyalive.com/blog/wp-content/uploads/2017/07/mapeamento-do-perfil-de-colaboradores-como-ele-e-um-aliado-das-empresas.jpg",
      style:"Button",
      titulo:"Ver Perfil",
      link:"/perfil"
    },

    {
      tituloCard: "Método de pago",
      url: "https://www.womgp.com/blog/wp-content/uploads/2021/06/imagen-medios-de-pago-def-300x147.jpg",
      style:"Button",
      titulo:"Ver metodo de pago",
      link:"/informacion-pago"
    },
    {
      tituloCard: "Chat Sugerencia",
      url: "https://www.gob.mx/cms/uploads/document/main_image/66073/Buzo_n_y_manual_anticorrupcio_n-01.jpg",
      style:"Button",
      titulo:"Ir al chat",
      link:"/sugerencias"
      
    },
    {
        tituloCard: "Contrato",
        url: "https://blog.wasi.co/wp-content/uploads/2020/02/Formato-de-contrato-de-compraventa-de-inmuebles.jpg",
        style:"Button",
        titulo:"Ver Contrato",
        link:"/contrato"
      },
  ];

  return (
    <>
      <Cards cProps={cProps} />
    </>
  );
}