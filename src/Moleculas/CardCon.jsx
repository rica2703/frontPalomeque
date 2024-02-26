

function CardCon() {
    return (
        <div className="cardContratoClass">
        <h1>
            {titulo}
        </h1>
        <p>
            {subtitulo}
        </p>
        <p>
            {cont[0]}
        </p>
        <p>
            {cont[1]}
        </p>
        <p>
            {cont[2]}
        </p>
        <p>
            {fecha}
        </p>
        <p>
            {lugar}
        </p>
     </div>
    );
}

export default CardCon;