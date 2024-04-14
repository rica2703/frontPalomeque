import React from "react";
import Cards from "../Moleculas/Cards";

export default function Contenido() {
  const cProps = [
    {
      tituloCard: "Lista De Usuarios",
      url: "https://www.psyalive.com/blog/wp-content/uploads/2017/07/mapeamento-do-perfil-de-colaboradores-como-ele-e-um-aliado-das-empresas.jpg",
      style:"Button",
      titulo:"Ver Lista",
      link: "/lista-usuario"
    },

    {
      tituloCard: "Agregar Usuarios",
      url: "https://previews.123rf.com/images/vectora/vectora1502/vectora150200023/36350991-ilustraci%C3%B3n-vectorial-de-botones-de-usuario-agregar-eliminar-usuarios.jpg",
      style:"Button",
      titulo:"Agregar Usuarios",
      link: "/edicion-usuarios"
    },
    {
      tituloCard: "Editar Usuarios",
      url: "https://previews.123rf.com/images/vectora/vectora1502/vectora150200023/36350991-ilustraci%C3%B3n-vectorial-de-botones-de-usuario-agregar-eliminar-usuarios.jpg",
      style:"Button",
      titulo:"Editar Usuarios",
      link: "/agregar-usuarios"
    },

    {
      tituloCard: "Ver Sugerencias",
      url: "https://www.gob.mx/cms/uploads/document/main_image/66073/Buzo_n_y_manual_anticorrupcio_n-01.jpg",
      style:"Button",
      titulo:"Ver Sugerencias",
      link: "/sugerencias"
    },

  ];

  return (
    <>
      <Cards cProps={cProps} />
    </>
  );
}