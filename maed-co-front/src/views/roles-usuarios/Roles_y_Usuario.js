import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const url= 'http://localhost:3001/users';


class RolesYUsuario extends Component {
  constructor(props) {
    super(props);
    this.eleRef = React.createRef();
    this.state = {
      data: [],
      modalInsert: false,
      modalEliminar: false,
      modalActualizar: false,
      isData: false,
      //Estos son los nombres que deben tener los inputs ej. name='id' 
      form:{
        id: '',
        email: '',
        username: '',
        password: '',
        firstName:'',
        lastName:'',
        role:'',
        tipoModal: ''
      }
    };
  }

  
  async penticionGet() {
    const response = await fetch(url);
    if (!response.ok) {
      
      console.log(response);
    }
    const data = await response.json();  
    if (data.error) {
      this.notifyError();
      return this.setState({ isData: false });
    }  
    this.setState({data, isData: true});
    console.log(this.state.data);
    this.notifySuccess()
  }
  

  componentDidMount() {
    
    this.penticionGet();
    
    
  }
 
  modalInsert=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  modalActualizar=(client)=>{
    this.setState({modalActualizar: !this.state.modalActualizar});
    console.log(client?.id);
  }

  seleccionarUsuario=(usuario)=>{
    this.setState({
    
      form: {
        id: usuario.id,
        firstName: usuario.firstName,
        lastName: usuario.lastName,
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
    }

    // PETICIONES
//async porque se ejecutara en segundo plano
    peticionPost=async()=>{
      delete this.state.form.id;
     await axios.post(url,this.state.form).then(response=>{
        this.modalInsert();
        this.notifySuccess()
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }

  
    
    peticionPut=async()=>{
      await axios.put(url+"/"+this.state.form.id, this.state.form)
      .then(response=>{
        var dataNueva = this.state.data;
        dataNueva.map(cliente=> {
          if(cliente.id ===this.state.data.id) {
            cliente.firstName = this.state.data.firstName;
            cliente.username=this.state.data.username;
            cliente.lastName=this.state.data.lastName;
            cliente.email=this.state.data.email;
            cliente.role=this.state.data.role;
            this.peticionPost();
          }
          this.setState(dataNueva);
        });
        
        this.peticionGet();
       
      })
    }
    /*
    peticionDelete = async (client) =>{
      if(!client?.id) {
        return;
      }


      /*
      await fetch(url + '/' + client?.id, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      });*/ /*
      axios.delete(url + '/' + this.state.form.id).then(response=>{
        
        this.peticionGet();
      })
    }*/
   notifySuccess =() => {
      toast.success('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })}

      notifyError =({error}) => {
        toast.error('Error : ' + {error},{position: toast.POSITION.BOTTOM_RIGHT })}   

  peticionDelete=async()=>{
  await axios.delete(url+"/"+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.penticionGet();
   
  }).catch(error=>{
    console.log(error);
    this.notifyError(error)
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
        <button className="btn btn-success" id='newUsuario'   onClick={()=>{this.setState({form: null, tipoModal: 'insert'}); this.modalInsert()}}> Agregar Nuevo</button>    
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
         {this.state.isData ? this.state.data.map(client => 
      (     
        <tr key={client.id} id={client.id}>
          
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>{client.username}</td>
          <td>{client.email}</td>
          <td>{client.role}</td>
          <td>
            <button className="btn btn-primary" onClick={ ()=> {this.seleccionarUsuario(client);  this.modalActualizar(client)}}><FontAwesomeIcon icon={faEdit}/> </button>
            {"  "}
            <button className="btn btn-dange" id="trash" onClick = {()=> {this.setState({modalEliminar: true}); this.seleccionarUsuario(client); }}><FontAwesomeIcon icon={faTrashAlt}/> </button>

          </td>


         </tr>
      )
    ): <tr> No users</tr>
      }
          </tbody>
        </table>
        

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float: 'right'}} className='close' onClick={()=>this.modalInsert()}>X</span>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              
              <label htmlFor='firstName'>Nombre</label>
              <input type="text" className='form-control' name='firstName' id='firstName'
               onChange={this.handleChange}  value={form?form.firstName: ''} />
              <br/>

              <label htmlFor='lastName'>Apellido</label>
              <input type="text" className='form-control' name='lastName' id='lastName' onChange={this.handleChange} 
              value={form?form.lastName: ''} />
              <br/>

              <label htmlFor='username'>Usuario</label>
              <input type="text" className='form-control' name='username' id='username' onChange={this.handleChange} value={form?form.username: ''}/>
              <br/>

              <label htmlFor='password'>Contraseña</label>
              <input type="text" className='form-control' name='password' id='password' onChange={this.handleChange} value={form?form.password: ''}/>
              <br/>

              <label htmlFor='email'>Email</label>
              <input type="email" className='form-control' name='email' id='email' 
              onChange={this.handleChange} value={form?form.email: ''} />
              <br/>
              
              <label htmlFor='role'>Rol</label>
              <select className="form-select" value={form?form.role: ''}>
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

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float: 'right'}} onClick={()=> this.modalActualizar()} className='close'>X</span>
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

              

              <label htmlFor='email'>Email</label>
              <input type="text" className='form-control' name='email' id='email' 
              onChange={this.handleChange} value={form?form.email: ''} />
              <br/>
              
              <label htmlFor='role'>Rol</label>
              <select className="form-select"     value={form?form.role: ''}>
                <option value ="1">Seleccione</option>
                <option value="2">Vendedor</option>
                <option value="3">Caja</option>
               
              </select>
              <br/>
            </div>
            <ModalFooter className='Mfooter' >
            <button className="btn btn-success" onClick={()=>{this.peticionPut(); this.modalActualizar()}}> Actualizar</button>
            <button className='btn btn-danger' id='trash' onClick={()=>this.modalActualizar()}> Cancelar</button>
            </ModalFooter>

          </ModalBody>
        </Modal>


       <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar este usuario:  {form && form.firstName}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=> {this.peticionDelete(); this.setState({modalEliminar: false})} }>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
        </div>

    </div>  
        
   

  </div>
    )
}
}
export default RolesYUsuario;
