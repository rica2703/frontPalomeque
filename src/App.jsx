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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logging />} /> 
        <Route path="/landing" element={<Landing />} /> 
        <Route path="/informacion-pago" element={<InformacionDePago />} />
        <Route path="/contrato" element={<Contrato />} />
        <Route path="/sugerencias" element={<Sugerencias />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/agregar-usuarios" element={<AgregarUsuarios />} />
        <Route path="/edicion-usuarios" element={<EdicionUsuarios />} />
        <Route path="/lista-usuario" element={<ListaUsuario />} />
        <Route path="/menu-usuario" element={<MenuUsuario />} />
      </Routes>
    </Router>
  );
};

export default App;