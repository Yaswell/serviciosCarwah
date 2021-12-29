import React from 'react'
import btnBuscar from '../assets/img/buscar.png'
import IconoNuevo from '../assets/img/btnAgregar.png';
import { useState }from 'react';
 
const SearchAdd = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSearch = (e) => {
        setPhoneNumber(e.target.value);
    }
    
    const getClientsByPhone = async (phone) => {
        const response = await fetch(`http://localhost:3001/clients/phone/${phone}`);
        const user = await response.json();
        console.log(user);

    }


    return (
        <div className="search-add">
            <input type="text" placeholder="Telefono del cliente" value={phoneNumber} onChange={handleSearch} />
            <button onClick={() => getClientsByPhone(phoneNumber)} className="btnSearch" ><img src={btnBuscar} alt="buscar"/> </button>
            <button className="btnNew"> <img src ={IconoNuevo} alt="" /> Agregar </button>
        </div>
    )
}

export default SearchAdd
