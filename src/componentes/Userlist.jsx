import { useState, useEffect } from "react"
import { fetchdata } from "./hooks/fetchdata"

export const Userlist = ({endpoint}) => {

    const {data, isloading} = fetchdata(endpoint) 

  return (
    <>
        <ul>
            {data.map(user => <li key={user.id}> Nombre: {user.name}</li>)}
        </ul>
    </>
  )
}
