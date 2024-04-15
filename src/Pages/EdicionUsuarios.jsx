 import "../../styles/pages.css"
import Card2 from "../Moleculas/Card2";
import LabelTitle from '../Moleculas/LabelTitle';


function EdicionUsuarios() {
    return ( 
        <div className="PerfilClass">
            <LabelTitle text="Agregar Usuarios" complement="RentLaR"/>
          <Card2 title="Agregar"/>
           
        </div>
    );
}

export default EdicionUsuarios;