import { useState, useEffect } from "react"

export const fetchdata = (endpoint) => {

    const [data, setusuario] = useState([])
    const [isloading, setisloading] = useState(true)

    const fetchusers = async() =>{
        try 
        {
            const response = await fetch("https://jsonplaceholder.typicode.com/"+endpoint+"")
            const data = await response.json()
            console.log(data)
            setusuario(data)
            setisloading(false)
        } 
        catch (error) 
        {
            
        }
    }

    useEffect(() => {
        fetchusers()
    }, [endpoint])


  return {
    data,
    isloading
  }

}
