import React from 'react'


const selector = ({title, opciones}) => {
    return (
        <div className= 'info-cliente selector'>
            <h5>{title} </h5>
             <select required>
                {opciones.map((opcion) => (
                     <option value={opcion.nombre}>{opcion.nombre}</option>
                    ))
                }
               
             </select>
        </div>
    )
}

export default selector
