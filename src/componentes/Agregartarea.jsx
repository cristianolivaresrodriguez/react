import { useState } from "react"

export const Agregartarea = ({addtask}) => {
    const [inputvalue, setinputvalue] = useState('')

    const cambio = (event) =>{
        console.log("estoy cambiando")
        setinputvalue(event.target.value)
    }

    const manda = (event) =>{
        event.preventDefault()
        /*console.log(inputvalue)

        const envio ={
            nombre: inputvalue,
            visto: false
        }*/
        //addtask(tareas => [...tareas , envio])
        addtask(inputvalue)
    }

  return (
    <>
        <form onSubmit={manda}>
            <input 
                type="text" 
                placeholder="ingresa nueva tarea"
                value={inputvalue}
                onChange={(event) => cambio(event)}
            />
        </form>
        
    </>
  )
}
