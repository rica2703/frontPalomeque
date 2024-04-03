import LabelTitle from "../Moleculas/LabelTitle";
import AtomButton from "../atomos/AtomButton";
import Card1 from "../Moleculas/Card1";
import cardData from "../Moleculas/CardData";


function ListaUsuario() {
    return ( 

<div>
<LabelTitle text="Lista de Usuarios" complement="RentLaR"/>
<AtomButton/>

{cardData.map((userData, index) => (
                    <Card1 key={index} {...userData} />
                ))}
</div>

        
     );
}

export default ListaUsuario;