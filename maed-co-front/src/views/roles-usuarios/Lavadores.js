import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const url= 'http://localhost:3001/lavadores';
class Lavadores extends Component {
    
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
        nombre: '',
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
        nombre: usuario.nombre,
        
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
        this.peticionGet();
        toast.success('Lavador registrado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })
        
      }).catch(error=>{
        console.log(error.message);
        toast.error('Error para registrar lavador',{position: toast.POSITION.BOTTOM_RIGHT })
      })
    }

  
    
    peticionPut=async()=>{
      await axios.put(url+this.state.form.id, this.state.form)
      .then(response=>{
        var dataNueva = this.state.data;
        dataNueva.map(cliente=> {
          if(cliente.id ===this.state.data.id) {
            cliente.nombre = this.state.data.nombre;
            
            this.peticionPost();
          }
          this.setState(dataNueva);
        });
        
        this.peticionGet();
       
      }).catch(error=>{
        console.log(error);
        toast.error('Error al actualizar usuario', {position: toast.POSITION.BOTTOM_RIGHT });
        
        
      })
    }
    
   notifySuccess =() => {
      toast.success('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })}

      notifyError =({error}) => {
        toast.error('Error : ' + {error},{position: toast.POSITION.BOTTOM_RIGHT })}   

  peticionDelete=async()=>{
  await axios.delete(url+"/"+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.penticionGet();
    toast.success('Lavador eliminado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })

  }).catch(error=>{
    console.log(error);
    toast.error('Error al eliminar usuario', {position: toast.POSITION.BOTTOM_RIGHT });
    this.notifyError(error)
    
  })
}
  render(){

    const {form}=this.state;
    return (
        <div className='lavadores trabajadores'> 
        <h2>Lavadores</h2>
        <button className="btnMaed" id='newLavador'   onClick={()=>{this.setState({form: null, tipoModal: 'insert'}); this.modalInsert()}}><FontAwesomeIcon icon= {faPlus}/></button>    
        <table className='table-users'>

            <thead className='theadRU'>

            <tr>
                
                <th>Nombre</th>
                <th>Accion</th>

            </tr>

            </thead>

            <tbody>
        {this.state.isData ? this.state.data.map(lavador => 
        (     
        <tr key={lavador.id} id={lavador.id}>
            
            <td>{lavador.nombre}</td>
            
            <td>
            <button id='edit' onClick={ ()=> {this.seleccionarUsuario(lavador);  this.modalActualizar(lavador)}}><FontAwesomeIcon className='actionsUsuario' icon={faEdit}/> </button>
            {"  "}
            <button  id="trash" onClick = {()=> {this.setState({modalEliminar: true}); this.seleccionarUsuario(lavador); }}><FontAwesomeIcon className='actionsUsuario' icon={faTrashAlt}/> </button>

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
              
              <label htmlFor='nombre'>Nombre</label>
              <input type="text" className='form-control' name='nombre' id='nombre'
               onChange={this.handleChange}  value={form?form.nombre: ''} />
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
              
              <label htmlFor='nombre'>Nombre</label>
              <input type="text" className='form-control' name='nombre' id='nombre'
               onChange={this.handleChange}  value={form?form.nombre: ''} />
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
               Estás seguro que deseas eliminar este lavador:  {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=> {this.peticionDelete(); this.setState({modalEliminar: false})} }>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
    </div>
    )
}
}

export default Lavadores
