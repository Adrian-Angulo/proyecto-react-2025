import React, { useEffect, useState } from 'react'
import axios from "axios";

export const App = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [listCripto, setListCripto] = useState([])

  useEffect(()=>{
    axios.get(`${API_URL}posts`)
    .then( (respuesta) => setListCripto(respuesta.data))
    .catch(() => console.error("Error al acceder a criptos")
    )

  }, [])

  if(!listCripto) return <h1>...Cargando</h1>
    
  return (
    <>
      <h1>Lista de Cripto monedas</h1>
      <ul>{
        listCripto.map(({id,title})=> (
          <li key={id} >Nombre: {title} </li>
        ) )
        
        }
        
      </ul>
    </>
  )
}

export default App