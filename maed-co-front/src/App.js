/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './assets/css/style.css';
import {Routes, Route} from "react-router-dom";

//VIEWS

import Ordenes from './views/ordenes/ordenes';
import Clientes from './views/Clientes/Clientes';
import RolesUsuario from './views/roles-usuarios/Roles_y_Usuario';
import PlanesServicios from './views/planes-servicios/Planes_Servicios';
import Reportes from './views/Reportes/Reportes';
import  Login  from './views/login';
import ServicioForm from './components/ServicioForm';
import Prueba from './views/Prueba';
function App() {
  return (
          <Routes>
            
            <Route path='/ordenes' element = {<Ordenes />}  />
            <Route path='/clientes' element = {<Clientes />} />
            <Route path='/roles-usuario' element = {<RolesUsuario />} />
            <Route path='/planes-servicios' element = {<PlanesServicios  />} />
            <Route path='/reportes' element = {<Reportes />} />
            <Route path='/' element = {<Login />} />
            <Route path= '/n' element = {<ServicioForm />} />
            <Route path='/prueba' element = {<Prueba />} />
          </Routes>
         
  );
      
 
      
  
  
}

export default App;
