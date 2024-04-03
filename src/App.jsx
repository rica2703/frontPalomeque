import "../styles/LandingPage.css";
import Landing from './Pages/Landing';
import Logging from './Pages/Loggin';
import InformacionDePago from './Pages/Informaciondepago';
import Sugerencias from "./Pages/Sugerencias"
import Perfil from './Pages/Perfil';
import AgregarUsuarios from "./Pages/AgregarUsuarios";
import EdicionUsuarios from "./Pages/EdicionUsuarios";
import MenuUsuario from "./Pages/MenuUsuario";
import Contrato from "./Pages/Contrato";
import ListaUsuario from "./Pages/ListaUsuario";

function App() {
    return (
        <>
           
               <Logging />
            <Landing />
            <InformacionDePago />
            <Sugerencias />
            <Perfil />
            <MenuUsuario/>
  
            <AgregarUsuarios/>

 <EdicionUsuarios/>  
 <ListaUsuario/> 
 <Contrato/> 
        </>
    );
}

export default App;