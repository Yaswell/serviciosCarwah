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
        id: '',
        email: '',
        username: '',
        password: '',
        firstName:'',
        lastName:'',
        isAdmin:false,
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
            
        <p>Tabla con buscador para poder editar la informacion de los clientes Lorem asldkasl dlasjdla sdjlas jdlajsl dkj </p>
        <button className="btn btn-success"  onClick={()=>this.modalInsert()}> Agregar Nuevo</button>    
        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Accion</th>
              


            </tr>

          </thead>
          <tbody>
         {this.state.data.map(client => 
      (
        <tr>
          <td>{client.id}</td>
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>
            <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/> </button>
            {"  "}
            <button className="btn btn-dange"><FontAwesomeIcon icon={faTrashAlt}/> </button>

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
              <label htmlFor='id'>ID</label>
              <input type="text" className='form-control' name='id' id='id' onChange={this.handleChange} disabled
              value={form?form.id: this.state.data.length+1} />
              <br/>
              <label htmlFor='firstName'>Nombre</label>
              <input type="text" className='form-control' name='firstName' id='firstName'
               onChange={this.handleChange}  value={form?form.firstName: ''} />
              <br/>
              <label htmlFor='email'>Email</label>
              <input type="text" className='form-control' name='email' id='email' 
              onChange={this.handleChange} value={form?form.email: ''} />
              <br/>
              <label htmlFor='userName'>Usuario</label>
              <input type="text" className='form-control' name='userName' id='userName' onChange={this.handleChange} value={form?form.username: ''}/>
              <br/>
              <label htmlFor='role'>Role</label>
              <select className="form-select"  Disable   aria-label="multiple select example">
                <option defaultValue>Seleccione</option>
                <option value="1">Vendedor</option>
                <option value="2">Caja</option>
               
              </select>
              <br/>
            </div>
            <ModalFooter>
              <button className='btn btn-success'onClick={()=>this.peticionPost()} > Agregar</button>
              <button className='btn btn-danger' onClick={()=>this.modalInsert()}> Cancelar</button>

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
