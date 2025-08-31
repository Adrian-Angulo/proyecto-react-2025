import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./App.css";
import Criptomonedas from './Criptomonedas';

export const App = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [listCripto, setListCripto] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}posts`)
      .then((respuesta) => setListCripto(respuesta.data))
      .catch(() => console.error("Error al acceder a criptos")
      )

  }, [])

  if (!listCripto) return <h1>...Cargando</h1>

  return (
    <>
      <h1 className='titulo'>Lista de Cripto monedas</h1>
      <div className='tabla-container'>
        <table className='tabla' border={1}>
          <thead>
            <tr>
              <td>id</td>
              <td>Nombre</td>
              <td>Contenido</td>
            </tr>
          </thead>
          {listCripto.map(({id, title, body}) => (
            <Criptomonedas id={id} title={title} body={body} />
          ))}
          

        </table>
      </div>
    </>
  )
}

export default App