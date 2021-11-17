/* eslint-disable no-undef */
import React from "react";
import '../assets/css/style.css';
//Iconos
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom'
import nuevo_servicio from '../assets/img/nuevo_servicio.svg';
import ordenes from '../assets/img/ordenes.png';
import reportes from '../assets/img/reportes.png';
import planes_servicios from '../assets/img/planes_servicios.png';
import clientes from '../assets/img/clientes.svg';
import rolesUsuario from '../assets/img/agents.svg';

import SidebarLink from './SidebarLink';

//import NuevoServicio from './NuevoServicio';


function Sidebar(){
    return(
        
            <div className="Sidebar">
                         
                <ul>
                    <Link to= '/' >
                    <li className="logo">
                    <span className="icon"><img src={logo} alt="logo" width="124" height="111" viewBox="0 0 124 111" fill="none">
                        </img>
                    </span>
                    
                    </li>
                    </Link>
                    
                    <SidebarLink  icono={nuevo_servicio} title="Nuevo Servicio"   route='/n'/>
                    
                    <SidebarLink icono={ordenes} title="Ordenes"  route='/ordenes' />
                    
                    <SidebarLink icono={clientes} id='Cliente'  title="Clientes"  route='/clientes'/>
                    
                    <hr></hr>
                    
                    <SidebarLink icono={reportes} title="Reportes"  route='/reportes'/>
                    
                    <hr></hr>
                    
                    <SidebarLink icono={planes_servicios} title="Planes"  route='/planes-servicios'/>
                    
                    
                    <SidebarLink icono={rolesUsuario} title= "Usuario"  route='/roles-usuario' />
                    

                
                </ul>

                
        </div>
            
    )
}


    

export default Sidebar;