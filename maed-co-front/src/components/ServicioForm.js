/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Button from './Button';
import FormCliente  from '../views/nuevo-servicio/FormCliente';
import FormVehiculo from '../views/nuevo-servicio/FormVehiculo';
import FormServicio from '../views/nuevo-servicio/FormServicio';
import FormConfirmacion from '../views/nuevo-servicio/FormConfirmacion';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BackIcon from '../assets/img/back.png'
import NextIcon from '../assets/img/next.png'
import CheckIcon from '../assets/img/check.png'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
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
    const notify =() => {
        toast.success('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })
        toast.error('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })
        
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
                                         
                                     }} data-hover="Anterior">  <div><img src ={BackIcon} alt="" /></div> </button>

                                     <button className='butNext'data-hover="confirmar" onClick={() => {
                                         if(page === FormPages.length-1){
                                            notify()
                                           
                                            
                                            
                                         } else {
                                            setPage((currPage) => currPage + 1);
                                         }
                                         
                                         
                                         
                                     }} >{page === FormPages.length -1 ? <div><img src ={CheckIcon} alt="" /></div>: <div><img src ={NextIcon} alt="" /></div>} </button>
                               
                                
                                </div>
                            </div>

                            
                    </div>
                        

                    
                </div>
                                    
            </div>  
      
    )
}

export default ServicioForm
