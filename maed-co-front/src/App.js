/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './assets/css/style.css';
//import box from './components/box';
import Button from './components/Button';
import SearchAdd from './components/SearchAdd';
import InfoCliente from './components/InfoCliente';

import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import NuevoServicio from './components/NuevoServicio';

function App() {
  return (
    <Router>
      <div className="wraper">

      <Sidebar/>

     
      <Switch>
        
                    <Route path="/ordenes">
                        <NuevoServicio />
                    </Route>
                    <Route path="/clientes">
                        clientes
                    </Route>
                    <Route path="/">
                        Nuevo Servicio
                    </Route>
                    <Route path="/">
                        Nuevo Servicio
                    </Route>
                    <Route path="/">
                        Nuevo Servicio
                    </Route>

                    </Switch>
            
        <div className="section">
            <div className="header">
                <a className="navbartext" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <span className="user">Administrador</span> 
                 </a>
                 <div className="sub-menu">
                     <a className="dropdown-item" href="#"><i className="fa fa-user pr-2"></i> Cerrar Sesion</a>
                     
                 </div>
            </div>

            <div className="main-content">

              <h1>Nuevo Servicio</h1>
                
              <div className="box">
                <SearchAdd />  
                <div className="sub-container">
                <InfoCliente title='Nombre' sugestion= 'Jose..' />     
                <InfoCliente title= "Apellido" sugestion = 'Ruiz' />
                <InfoCliente title= 'Correo' sugestion = 'jose@ruiz.do' />
                <InfoCliente title= 'Telefono' readOnly/>

                </div>   
                <Button text= 'Siguiente >' />
              </div>
                    

                
            </div>

        </div>  
      </div>
      </Router>
  );
  
}

export default App;
