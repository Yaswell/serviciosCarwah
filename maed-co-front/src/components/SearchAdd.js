import React from 'react'
import btnBuscar from '../assets/img/buscar.png'
import IconoNuevo from '../assets/img/btnAgregar.png'

const SearchAdd = () => {
    return (
        <div class="serch-add">
            <input type="text" placeholder="Telefono del cliente" />
            <button class="btnSearch" ><img src={btnBuscar} alt="buscar"/> </button>
            <button class="btnNew"> <img src ={IconoNuevo} alt="" /> Agregar </button>
        </div>
    )
}

export default SearchAdd
