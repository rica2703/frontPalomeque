import '../../styles/moleculas.css';
import "../../styles/atomos.css"
import BotonArrendatario from '../atomos/Arrendatario';
BotonArrendatario

function LabelTitlee({complement, text}) {
    return (
        <div  className="TitleLabelClass">
            <div>
            <Arrendatario/>
                <h1 className="textClass">
                    {text}
                </h1>
            </div>
            <div>
                <h1 className="complementClass">
                    {complement}
                </h1>
            </div>
        </div>
    );
}

export default LabelTitlee;