import '../../styles/atomos.css'
function Input({type = "text", nombre,textoInput,onChange,value}) {
    return (
        <div className="InputClass">
            <label >{nombre}</label>
            <input onChange={onChange} placeholder={textoInput}value={value}  type={type}/>
        </div>
    );
}

export default Input;