import React from 'react'
import btnBuscar from '../assets/img/buscar.png'
import IconoNuevo from '../assets/img/btnAgregar.png'

const SearchAdd = ({value, onChange, onClick}) => {
    return (
        <div className="search-add">
            <input type="text" placeholder="Telefono del cliente" value= {value} onChange={onChange} />
            <button onClick={onClick} className="btnSearch" ><img src={btnBuscar} alt="buscar"/> </button>
            <button className="btnNew"> <img src ={IconoNuevo} alt="" /> Agregar </button>
        </div>
    )
}

export default SearchAdd
