import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const url= 'http://localhost:3001/users';


class RolesYUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalInsert: false,
      //Estos son los nombres que deben tener los inputs ej. name='id' 
      form:{
       
        email: '',
        username: '',
        password: '',
        firstName:'',
        lastName:'',
        role:'',
      }
    };
  }

  
  async penticionGet() {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();    
    this.setState({data});
    console.log(this.state.data);
  }
  

  componentDidMount() {
    
    this.penticionGet();
    
    
  }
 
  modalInsert=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  seleccionarUsuario=(usuario)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: usuario.id,
        firstName: usuario.nombre,
        usuario: usuario.lastName,
        username: usuario.username,
        email: usuario.email,
        role: usuario.role,
      }
    })
  }

  //Capturar Inputs
  
  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    //MOSTRANDO LO QUE SE CAPTURA
    console.log(this.state.form);
    }

    // PETICIONES

    peticionPost=async()=>{
      delete this.state.form.id;
     await axios.post(url,this.state.form).then(response=>{
        this.modalInsert();
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
//async porque se ejecutara en segundo plano
    peticionPost=async()=>{
      delete this.state.form.id;
     await axios.post(url,this.state.form).then(response=>{
        this.modalInsert();
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    peticionPut=()=>{
      axios.put(url+this.state.form.id, this.state.form).then(response=>{
        this.modalInsert();
        this.peticionGet();
      })
    }
    
    peticionDelete=()=>{
      axios.delete(url+this.state.form.id).then(response=>{
        this.setState({modalEliminar: false});
        this.peticionGet();
      })
    }

  render(){

    const {form}=this.state;
    return (
        <div className="wraper">

        <Sidebar />
  
      

     
        <div className="section">
        <Header />        

        <div className="main-content">

          <h1>Usuario</h1>
            
        <p> Hay que editar el tamaño del email en la base de datos, parece que influye
          
          - Hayq eu verificar por que no se actualiza cuando se carga uno </p>
        <button className="btn btn-success" id='newUsuario'  onClick={()=>this.modalInsert()}> Agregar Nuevo</button>    
        <table className='table-users'>

          <thead>

            <tr>

              
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Accion</th>
              
              


            </tr>

          </thead>
          <tbody>
         {this.state.data.map(client => 
      (     
        <tr>
          
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>{client.username}</td>
          <td>{client.email}</td>
          <td>{client.role}</td>
          <td>
            <button className="btn btn-primary" onClick={ ()=> this.seleccionarUsuario(client)}><FontAwesomeIcon icon={faEdit}/> </button>
            {"  "}
            <button className="btn btn-dange" onClick = {()=> this.peticionDelete()}><FontAwesomeIcon icon={faTrashAlt}/> </button>

          </td>


         </tr>
      )
    )
  }
          </tbody>
        </table>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float: 'right'}}>X</span>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              
              <label htmlFor='firstName'>Nombre</label>
              <input type="text" className='form-control' name='firstName' id='firstName'
               onChange={this.handleChange}  value={form?form.firstName: ''} />
              <br/>

              <label htmlFor='lastName'>Apellido</label>
              <input type="text" className='form-control' name='lastName' id='lastName' onChange={this.handleChange} 
              value={form?form.lastName:''} />
              <br/>

              <label htmlFor='username'>Usuario</label>
              <input type="text" className='form-control' name='username' id='username' onChange={this.handleChange} value={form?form.username: ''}/>
              <br/>

              <label htmlFor='password'>Contraseña</label>
              <input type="text" className='form-control' name='password' id='password' onChange={this.handleChange} value={form?form.password: ''}/>
              <br/>

              <label htmlFor='email'>Email</label>
              <input type="text" className='form-control' name='email' id='email' 
              onChange={this.handleChange} value={form?form.email: ''} />
              <br/>
              
              <label htmlFor='rol'>Rol</label>
              <select className="form-select"  Disable   aria-label="select example" value={form?form.role: ''}>
                <option defaultValue>Seleccione</option>
                <option value="1">Vendedor</option>
                <option value="2">Caja</option>
               
              </select>
              <br/>
            </div>
            <ModalFooter className='Mfooter' >
              <button className='btn btn-success'onClick={()=>this.peticionPost()} > Agregar</button>
              <button className='btn btn-danger' id='trash' onClick={()=>this.modalInsert()}> Cancelar</button>

            </ModalFooter>

          </ModalBody>
        </Modal>
            
        </div>

    </div>  
        
   

  </div>
    )
}
}
export default RolesYUsuario;
