import CardCon from "./Moleculas/CardCon";
import LabelTitle from "./Moleculas/LabelTitle";

function Contrato() {
    const titulo = "Título del contrato";
    const subtitulo = "Subtítulo del contrato";
    const cont = ["Contenido 1", "Contenido 2", "Contenido 3"];
    const fecha = "Fecha del contrato";
    const lugar = "Lugar del contrato";

    return (
        <div>
            <LabelTitle complement="RentLaR" text="Contrato"/>
            <CardCon
                titulo={titulo}
                subtitulo={subtitulo}
                cont={cont}
                fecha={fecha}
                lugar={lugar}
            />
        </div>
    );
}

export default Contrato;
