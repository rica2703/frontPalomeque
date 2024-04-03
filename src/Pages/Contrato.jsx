
import LabelTitle from "../Moleculas/LabelTitle";
import CardCon from "../Moleculas/CardCon";

function Contrato() {


    const CardProps= [
        {
    titulo : "Título del contrato",
    subtitulo : "Subtítulo del contrato",
    cont :["Contenido 1", "Contenido 2", "Contenido 3"],
   fecha : "Fecha del contrato",
    lugar : "Lugar del contrato",
        }
      ]

    return (
        <div>
            <LabelTitle complement="RentLaR" text="Contrato"/>
           
        </div>
    );
}

export default Contrato;
