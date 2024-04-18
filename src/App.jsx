import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../styles/LandingPage.css";
import Landing from './Pages/Landing';
import Logging from './Pages/Loggin';
import InformacionDePago from './Pages/Informaciondepago';
import Contrato from './Pages/Contrato';
import Sugerencias from "./Pages/Sugerencias";
import Perfil from './Pages/Perfil';
import AgregarUsuarios from "./Pages/AgregarUsuarios";
import EdicionUsuarios from "./Pages/EdicionUsuarios";
import ListaUsuario from "./Pages/ListaUsuario";
import MenuUsuario from "./Pages/MenuUsuario";
import userContext from './userContext';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Logging /> },
  { path: "/landing", element: <Landing /> },
  { path: "/informacion-pago", element: <InformacionDePago /> },
  { path: "/contrato", element: <Contrato /> },
  { path: "/sugerencias", element: <Sugerencias /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/agregar-usuarios", element: <AgregarUsuarios /> },
  { path: "/edicion-usuarios", element: <EdicionUsuarios /> },
  { path: "/lista-usuario", element: <ListaUsuario /> },
  { path: "/menu-usuario", element: <MenuUsuario /> },


]);
const App = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    nombre:"",
    numCelular: 0,
    nombreEmergencia: "",
    numEmergencia: 0,
    numCuarto: 0,
  });
  return (
    <>
    <userContext.Provider value={{ user, setUser }}>
    <RouterProvider router={router} />
    </userContext.Provider>
    </>
  );
};

export default App;