import '../../styles/atomos.css'
function Input({type = "text", nombre}) {
    return (
        <div className="InputClass">
            <label >{nombre}</label>
            <input type={type}/>
        </div>
    );
}

export default Input;