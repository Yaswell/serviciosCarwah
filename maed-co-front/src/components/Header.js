/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../assets/css/style.css';

const Header = () => {
    return (
        <nav>
        <div className="header">
                <a className="navbartext" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <span className="user">Administrador </span> 
                 </a>
                 <div className="sub-menu">
                     <a className="dropdown-item" href="#"><i className="fa fa-user pr-2"></i> Cerrar Sesion</a>
                     
                 </div>
            </div>
        </nav>
    )
}

export default Header
