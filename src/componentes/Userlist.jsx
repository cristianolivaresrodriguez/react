import { useState, useEffect } from "react"

export const Userlist = ({endpoint}) => {

    const [usuario, setusuario] = useState([])

    const fetchusers = async() =>{
        try 
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/"+endpoint+"")
            const data = await response.json()
            console.log(data)
            setusuario(data)
        } 
        catch (error) 
        {
            
        }
    }

    useEffect(() => {
        fetchusers()
    }, [endpoint])

  return (
    <>
        <ul>
            {usuario.map(user => <li key={user.id}> Nombre: {user.name}</li>)}
        </ul>
    </>
  )
}
