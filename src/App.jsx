import "../styles/LandingPage.css";
import Landing from './Landing';
import Logging from './Loggin';
import InformacionDePago from './Informaciondepago';
import Contrato from './Contrato';
import Sugerencias from "../src/Sugerencias"
import Comprobantes from "../src/Comprobantes"
import Perfil from './Perfil';
import AgregarUsuarios from "./AgregarUsuarios";
import EdicionUsuarios from "./EdicionUsuarios";

function App() {
    return (
        <>
           
            <Logging />
            <Landing />
            <InformacionDePago />
            <Sugerencias />
            <Comprobantes />
            <Perfil />
            <AgregarUsuarios/>
            <EdicionUsuarios/>
        </>
    );
}

export default App;