import './PrimerComponente.css'

const string = "texto"
const number = 123456
const array = ['curso', 'youtube', 4, 1992]
const bool = true
const funcion = () => 1+1
const obj = {nombre: "cris", duracion: 4}
const fecha = new Date()

export const PrimerComponente = ({titulo,valor}) => {
    console.log(titulo)
    return (
        <>
            <h1>{titulo}</h1>
            <h1>{valor + 1}</h1>
        </>
    )
}

PrimerComponente.defaultProps = {
    titulo: "titulo por defecto",
    valor : 8
}