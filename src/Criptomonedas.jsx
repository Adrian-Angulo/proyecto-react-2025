import React from 'react'
import './App.css';

export const Criptomonedas = ({ id, title, body }) => {
    return (

        <tbody>
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
            </tr>
        </tbody>

    )
}

export default Criptomonedas