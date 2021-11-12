import React from "react";
import '../assets/css/style.css';
//Iconos
import logo from '../assets/img/logo.png';

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
                    <li className="logo">
                    <span className="icon"><img src={logo} alt="logo" width="124" height="111" viewBox="0 0 124 111" fill="none">
                        </img>
                    </span>
                    
                    </li>
                    
                    <SidebarLink  icono={nuevo_servicio} title="Nuevo Servicio" className='active-tab' route='/'/>
                    
                    <SidebarLink icono={ordenes} title="Ordenes" className='tab' route='/ordenes' />
                    
                    <SidebarLink icono={clientes} id='Cliente' title="Clientes" className='tab' route='/clientes'/>
                    
                    <hr></hr>
                    
                    <SidebarLink icono={reportes} title="Reportes" className='tab' route='/reportes'/>
                    
                    <hr></hr>
                    
                    <SidebarLink icono={planes_servicios} title="Planes" className='tab' route='/planes-servicios'/>
                    
                    
                    <SidebarLink icono={rolesUsuario} title= "Usuario" className='tab' route='/roles-usuario' />
                    

                
                </ul>

                
        </div>
            
    )
}

function changeStatus(){
    let list = document.querySelectorAll('option');
    for (let i=0;i <list.length; i++ ){
        list[i].onclick = function(){
            let j=0;
            while(j<list.length){
                list[j++].className ='tab';
            }
            list[i].className = 'active-tab';
        }
    }

}
    

export default Sidebar;