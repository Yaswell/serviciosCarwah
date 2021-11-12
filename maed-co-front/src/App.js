/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './assets/css/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
//import box from './components/box';
import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";

//VIEWS

import Ordenes from './views/ordenes/ordenes';
import Clientes from './views/Clientes/clientes';
import RolesUsuario from './views/roles-usuarios/Roles_y_Usuario';
import PlanesServicios from './views/planes-servicios/Planes_Servicios';
import Reportes from './views/Reportes/Reportes';
import  Login  from './views/login';
import ServicioForm from './components/ServicioForm';
function App() {
  return (<Router>
          <div>
          <Routes>
            
            <Route path='/ordenes' element = {<Ordenes />}  />
            <Route path='/clientes' element = {<Clientes />} />
            <Route path='/roles-usuario' element = {<RolesUsuario />} />
            <Route path='/planes-servicios' element = {<PlanesServicios  />} />
            <Route path='/reportes' element = {<Reportes />} />
            <Route path='/login' element = {<Login />} />
            <Route path= '/' element = {<ServicioForm />} />
          </Routes>
          </div>
        </Router>
  );
      
 
      
  
  
}

export default App;
