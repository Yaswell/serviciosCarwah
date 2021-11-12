import React from 'react'
import SearchAdd from '../../components/SearchAdd';
import InfoCliente from '../../components/InfoCliente';
import cliente from '../../assets/img/stateBar/cliente.svg'
import Statebar from '../../components/statebar';

export const Form1 = ({formData, setFormData}) => {
    return (
        <div>
             <Statebar icono={cliente} /> 
             <div className="sub-container">
             <SearchAdd  value={formData.telefono} 
                                onChange= {(event) =>{ setFormData({...formData, telefono: event.target.value});
                            }} />  
                                <InfoCliente title='Nombre' sugestion= 'Jose..' 
                                value={formData.nombre} 
                                onChange= {(event) =>{ setFormData({...formData, nombre: event.target.value});
                            }} />     
                                
                                <InfoCliente title= "Apellido" sugestion = 'Ruiz'
                                value={formData.apellido} 
                                onChange= {(event) =>
                                { setFormData({...formData, apellido: event.target.value});
                            }} />
                                <InfoCliente title= 'Correo' sugestion = 'jose@ruiz.do'
                                  value={formData.email} 
                                  onChange= {(event) =>
                                  { setFormData({...formData, email: event.target.value});
                              }}
                                 />
                                <InfoCliente title= 'Telefono' readOnly 
                                value={formData.telefono} 
                                onChange= {(event) =>{ setFormData({...formData, telefono: event.target.value});
                            }}  />                   







             </div> 
            
        </div>
    )
}

export default Form1

