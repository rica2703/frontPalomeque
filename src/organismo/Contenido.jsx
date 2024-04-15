import React from "react";
import Cards from "../Moleculas/Cards";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import PersonIcon from '@mui/icons-material/Person';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ChatIcon from '@mui/icons-material/Chat';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';


export default function Contenido() {
  const cProps = [
    {
      tituloCard: "Lista De Usuarios",
      icon: FormatListNumberedIcon, // Utiliza el icono en lugar de la URL
      style: "Button",
      titulo: "Ver Lista",
      link: "/lista-usuario"
    },
    {
      tituloCard: "Agregar Usuarios",
      icon: AddToPhotosIcon, // Utiliza el icono en lugar de la URL
      style: "Button",
      titulo: "Agregar Usuarios",
      link: "/edicion-usuarios"
    },
    {
      tituloCard: "Editar Usuarios",
      icon: EditNoteIcon, // Utiliza el icono en lugar de la URL
      style: "Button",
      titulo: "Editar Usuarios",
      link: "/agregar-usuarios"
    },
    {
      tituloCard: "Chat Grupal",
      icon: ChatIcon, // Utiliza el icono en lugar de la URL
      style: "Button",
      titulo: "Ir al chat",
      link: "/sugerencias"
    }
  ];

  return (
    <>
      <Cards cProps={cProps} />
    </>
  );
}
