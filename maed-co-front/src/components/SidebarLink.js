import React from 'react'
import { Link } from 'react-router-dom'
//import PropType;

const SidebarLink = ({icono, title, className, route}) => {
    return (
        <li className={className}>
            <Link style={{color: '#A4A6B3', textDecoration: 'none' } } to= {route}>
            <span className="icon">
                <img src={icono} alt={title} ></img>        
            </span>
            <span className="title">{title}</span>
            </Link>
        </li>
    )
}

export default SidebarLink
