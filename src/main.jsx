import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './estilos.css'
import { Contador } from './Contador'
import { Listadoapp } from './Listadoapp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<PrimerComponente titulo="esto es de props" valor={4} />*/ }
    {/*<Contador valor={0} />*/}
    <Listadoapp />
  </React.StrictMode>,
)
