import React from 'react'
import { Link } from 'react-router-dom'
//import PropType;


const SidebarLink = ({icono, title, className, route}) => {
    React.useEffect(() => {

        console.log('route', route)
      
        }, [route]);
    return (
        
        <Link className='option' style={{ textDecoration: 'none', color: '#A4A6B3' }} to={route}>
        <li className={className}
            id={window.location.pathname.includes(route) ? 'active' : ''}
        >
            
            <span className="icon">
                <img src={icono} alt={title} ></img>        
            </span>
            <span className="title">{title}</span>
            
        </li>
        </Link>
    )
}
SidebarLink.defaultProps ={
    className:'tab',
}


export default SidebarLink
