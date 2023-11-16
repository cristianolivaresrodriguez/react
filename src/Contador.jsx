import { useState } from "react"

export const Contador = ({valor}) => {
    
    const [ contador, setContador] = useState (valor)

    const pulsa = (event,mens) => {
        setContador(contador + 1)
        //console.log(contador)
        //console.log(event)
        //console.log(mens)
    }

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={ (event) => pulsa(event, "si")}>
                Incrementa
            </button>
        </>
    )
}