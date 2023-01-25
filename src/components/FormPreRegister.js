import {useState} from "react"

function FormPreRegister(){
    const [categoria, setCategoria] = useState('')
    const [email, setEmail] = useState('')
    const [sexo, setSexo] = useState('')
    const [termos, setTermos] = useState(false)

    function handleFieldCategoria(e) {
        setCategoria (e.target.value)
    }

    function handleFieldEmail(e) {
        setEmail (e.target.value)
    }

    function handleFieldSexo(e){
        setSexo(e.target.value)
    }

    function handleFieldTermos(e){
        setTermos (e.target.checked)
    }

    function handleFormSubmit(){
        if(categoria === '') {
            alert("")
        }
    }
    return (
        <>
        <h1>Pré cadastro</h1>
        <form onSubmit={handleFormSubmit}>
            <div onChange={handleFieldCategoria}>
                <p>Categoria</p>
                <input type="radio" name="categoria" value="Aluno" />
                <label>Aluno</label>
                <input type="radio" name="categoria" value="Professor"/>
                <label>Professor</label>
            </div>
            <br/>
            <div>
                <label>E-mail</label>
                <input onChange={handleFieldEmail} value={email} type="email" name="email" placeholder="Adicione seu email"/>
            </div>
            <br/>
            <div>
                <label>Sexo</label>
                <select onChange={handleFieldSexo} name="sexo" defaltValue="masculino">
                    <option value="masculino">masculino</option>
                    <option value="feminino">feminino</option>
                </select>
            </div>
            <br/>
            <div>
                <input onChange={handleFieldTermos} type="checkbox" name="termos"/>
                <lebel>Aceito os termos de uso</lebel>
            </div>
            <br/>
            <button type="submit">Registrar</button>
        </form>
        </>
    )
}

export default FormPreRegister;