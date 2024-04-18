import React from "react";
import Cards from "../Moleculas/Cards";
import ChatIcon from '@mui/icons-material/Chat';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';

export default function Usuario() {
  const cProps = [
    {
      tituloCard: "Perfil",
      icon: AccountCircleIcon, // Utiliza el icono en lugar de la URL
      style:"Button",
      titulo:"Ver Perfil",
      link:"/perfil"
    },

    {
      tituloCard: "Método de pago",
      icon: AttachMoneyIcon, // Utiliza el icono en lugar de la URL
      titulo:"Ver metodo de pago",
      link:"/informacion-pago"
    },
    {
      tituloCard: "Chat Grupal",
      icon: ChatIcon, // Utiliza el icono en lugar de la URL
      style:"Button",
      titulo:"Ir al chat",
      link:"/sugerencias"
      
    },
    {
        tituloCard: "Contrato",
        icon: GavelIcon, // Utiliza el icono en lugar de la URL
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