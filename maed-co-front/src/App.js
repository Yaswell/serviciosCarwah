import React from 'react'
import './App.css';
import box from './components/box';
import Button from './components/Button';


import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="wraper">

      <Sidebar/>
        

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

                <h1>Titulo de la pagina</h1>
                <box />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit magni assumenda iste nam, consectetur vitae blanditiis nesciunt quia consequuntur eaque voluptatibus earum itaque sit eos officiis rem aliquam saepe cum!</p>
               
                <Button className='btnNew' text='Agregar'/>
             </div>

        </div>  
    </div>
  );
  
}

export default App;
