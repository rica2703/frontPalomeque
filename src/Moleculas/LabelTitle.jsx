import '../../styles/moleculas.css'

function LabelTitle({complement, text}) {
    return (
        <div  className="TitleLabelClass">
            <div>
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

export default LabelTitle;