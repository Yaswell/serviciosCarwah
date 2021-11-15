/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Button from './Button';
import FormCliente  from '../views/nuevo-servicio/FormCliente';
import FormVehiculo from '../views/nuevo-servicio/FormVehiculo';
import FormServicio from '../views/nuevo-servicio/FormServicio';
import FormConfirmacion from '../views/nuevo-servicio/FormConfirmacion';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import {Link} from 'react-router-dom';

const ServicioForm = () => {
    const [page, setPage] = useState(0);
    const FormPages=[1,2,3,4]
    const [FormData, setData]= useState({
        telefono: '',
        nombre:'',
        apellido:'',
        email:'',
        objeto:'',
        choques:'',
        plan:true,
        hidraTableto: false,
        alimento:'',
        precio:0,

    })
    const PageDisplay = () => {
        if (page ===0){
            return <FormCliente formData= {FormData} setFormData={setData} />;
        } else if (page === 1){
            return <FormVehiculo />;
        }else if(page ===2){
            return <FormServicio formData= {FormData} setFormData={setData}/>;
        } else if (page ===3){
            return<FormConfirmacion />;
        }
    }

    return (
        <div className="wraper">

            <Sidebar/>
      
            <div className="section">
                <Header />        

                <div className="main-content">

                    <h1>Nuevo Servicio</h1>
                    
                    <div className="box">
                    
                                 
                        {PageDisplay()}





                            <div className= 'backNext'>
                                
                                    <button className='btnBack' disabled={page === 0} onClick={() => {
                                         setPage((currPage) => currPage - 1);
                                         
                                     }} >  Anterior </button>

                                     <button className='butNext' disabled={page === FormPages.length-1} onClick={() => {
                                         setPage((currPage) => currPage + 1);
                                         
                                     }} >Siguiente </button>
                               
                                
                                </div>
                            </div>

                            
                    </div>
                        

                    
                </div>
                                    
            </div>  
      
    )
}

export default ServicioForm
