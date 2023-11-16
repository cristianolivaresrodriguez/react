import { useState } from "react"
import { Agregartarea } from "./componentes/Agregartarea"

const Items = ({nombre, visto}) =>{
    return (
        <li>
            {nombre} 
            {visto ? ' si ': 'no '}
        </li>
    )
}

export const Listadoapp = () => {

    const addelemento = () =>{
        setarreglo([...arreglo, {nombre: "nuevo", visto: false}])

    }

    let listdosecciones = [
        {
            nombre: 'componentes', visto: true
        },
        {
            nombre: 'variables', visto: true
        },
        {
            nombre: 'eventos', visto: true
        },
        {
            nombre: 'redux', visto: false
        },
        
    ]

    const [arreglo, setarreglo] = useState(listdosecciones)
    console.log(arreglo)

  return (
        <>
            <h1>Listado de temas</h1>
            <Agregartarea addtask={setarreglo}></Agregartarea>
            
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>

            
            {/*<button onClick={() => addelemento()}>Agregar elemento</button>*/}
        </>
  )
}