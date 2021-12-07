import React, {useState, useEffect} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

            <input type="text" className='form-control' name='password' id='password' onChange={onchange} />
const ModalInsertar = ({onChange, onClick}) => {
    const [data, setData] = useState([]);
    const modalInsert=()=>{
        this.setState({modalInsert: !this.state.modalInsert});
      }
    
    return (
        <Modal isOpen={modalInsert()}>
        <ModalHeader style={{display: 'block'}}>
          <span style={{float: 'right'}} className='close' onClick={()=>this.modalInsert()}>X</span>
        </ModalHeader>

        <ModalBody>
          <div className="form-group">
            
            <label htmlFor='firstName'>Nombre</label>
            <input type="text" className='form-control' name='firstName' id='firstName'
             onChange={onChange}   />
            <br/>

            <label htmlFor='lastName'>Apellido</label>
            <input type="text" className='form-control' name='lastName' id='lastName' onChange={onChange} 
             />
            <br/>

            <label htmlFor='username'>Usuario</label>
            <input type="text" className='form-control' name='username' id='username' onChange={onChange} />
            <br/>

            <label htmlFor='password'>Contraseña</label>
            <input type="text" className='form-control' name='password' id='password' onChange={onChange} />
            <br/>

            <label htmlFor='email'>Email</label>
            <input type="email" className='form-control' name='email' id='email' 
            onChange={onChange}  />
            <br/>
            
            <label htmlFor='role'>Rol</label>
            <select className="form-select" >
              <option value="0">Seleccione</option>
              <option value="1">Vendedor</option>
              <option value="2">Caja</option>
             
            </select>
            <br/>
          </div>
          <ModalFooter className='Mfooter' >
          <button className="btn btn-success" onClick={()=>this.peticionPost()}>Insertar</button>
            
            <button className='btn btn-danger' id='trash' onClick={()=>this.modalInsert()}> Cancelar</button>
          </ModalFooter>

        </ModalBody>
      </Modal>
    )
}

export default ModalInsertar
