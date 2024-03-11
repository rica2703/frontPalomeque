import React from "react";
import Cards from "../Moleculas/Cards";

export default function Contenido() {
  const cProps = [
    {
      tituloCard: "Lista De Usuarios",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Ver Lista"
    },

    {
      tituloCard: "Agregar Usuarios",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Agregar Usuarios"
    },
    {
      tituloCard: "Ver Sugerencias",
      url: "https://www.shutterstock.com/image-vector/suggestion-icon-vector-illustration-260nw-2284105619.jpg",
      style:"Button",
      titulo:"Ver Sugerencias"
    },
    {
      tituloCard: "Ver Comprobantes",
      url: "https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
      style:"Button",
      titulo:"Ver Comprobantes"
    },
  ];

  return (
    <>
      <Cards cProps={cProps} />
    </>
  );
}

