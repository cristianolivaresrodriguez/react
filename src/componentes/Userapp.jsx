import { useState, useEffect } from "react"
import { Userlist } from "./Userlist"

export const Userapp = () => {

    const [endpoint, setendpoint] = useState('users')

    const handlefetch = () =>{
        console.log("voy a llamar")
        setendpoint('comments')
    }

  return (
    <>
        <h1>Lista de usuarios</h1>
        <Userlist endpoint={endpoint}></Userlist>
        <button onClick={handlefetch}>Carga info</button>
    </>
  )
}
