import LabelTitle from "../Moleculas/LabelTitle";
import AtomButton from "../atomos/AtomButton";
import img from "../assets/img/Logo.png"


function ListaUsuario() {
    return (

        <div>
            <LabelTitle text="Lista de Usuarios" complement="RentLaR" />
            <AtomButton /> 
          
            <img src={img} className="Logo"/>
           
            
        </div>


    );
}

export default ListaUsuario;