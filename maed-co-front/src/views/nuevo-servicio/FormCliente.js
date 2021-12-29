import React,  { useState } from 'react'
import SearchAdd from '../../components/SearchAdd';
import InfoCliente from '../../components/InfoCliente';
import cliente from '../../assets/img/stateBar/cliente.svg'
import Statebar from '../../components/statebar';
import btnBuscar from '../../assets/img/buscar.png'
import IconoNuevo from '../../assets/img/btnAgregar.png';



export const Form1 = ({formData, setFormData}) => {
    const [clienteSeleccionado , setclienteSeleccionado ]=useState({
        firstName: "",
        lastName: "",
        id: "",
        phone: "",
        email: ""
      }) 
    
    const [phoneNumber, setPhoneNumber, firstName] = useState('');
    
    const handleSearch = (e) => {
        setPhoneNumber(e.target.value);
    }
    
    const getClientsByPhone = async (phone) => {
        const response = await fetch(`http://localhost:3001/clients/phone/${phone}`);
        const user = await response.json();
        
        
            
         
           
        console.log(user);
        return user.firstName
    }

   
    return (
        <div>
             <Statebar icono={cliente} /> 
             <div className="sub-container">
             <div className="search-add">
                <input type="text" placeholder="Telefono del cliente" value={phoneNumber} onChange={handleSearch} />
                <button onClick={() => getClientsByPhone(phoneNumber)} className="btnSearch" ><img src={btnBuscar} alt="buscar"/> </button>
                <button className="btnNew"> <img src ={IconoNuevo} alt="" /> Agregar </button>
             </div>
             
                              
                                
                                <div className="info-cliente">
                                 <h5>Nombre</h5>
                                 <input type="text"  placeholder="Jose.." name="firstName"   onChange={(event) =>{ setFormData({...formData, nombre: event.target.value})}} />
                                </div>
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

