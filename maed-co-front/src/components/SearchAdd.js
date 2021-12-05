import React from 'react'
import btnBuscar from '../assets/img/buscar.png'
import IconoNuevo from '../assets/img/add-user.png'

const SearchAdd = ({value, onChange}) => {


    return (
        <div className="search-add">
            <input type="text" placeholder="Telefono del cliente" value= {value} onChange={onChange} />
            <button className="btnSearch" ><img src={btnBuscar} alt="buscar"/> </button>
            <button className="btnNew" data-hover="Nuevo Usuario"> <div><img src ={IconoNuevo} alt="" />Agregar</div> </button>
        </div>
    )
}

export default SearchAdd
