import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';


import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Externos from './Externos';
import Internos from './Internos';

const url= 'http://localhost:3001/plans';
class Planes_Servicios extends Component {
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
        tipo: '',
        planName: '',
        planPrice: ''
      }
    };
  }

  async  peticionGet() {
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
    
    this.peticionGet();
    
    
  }
 
  modalInsert=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  modalActualizar=(client)=>{
    this.setState({modalActualizar: !this.state.modalActualizar});
    console.log(client?.id);
  }

  seleccionarUsuario=(plan)=>{
    this.setState({
    
      form: {
        id: plan.id,
        tipo: plan.tipo,
        planName: plan.planName,
        planPrice: plan.planPrice
        
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
        toast.success('Plan registrado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }

  
    
    peticionPut=async()=>{
      await axios.put(url + "/" + this.state.form.id, this.state.form)
      .then(response=>{
        var dataNueva = this.state.data;
        dataNueva.map(plan=> {
          if(plan.id ===this.state.data.id) {
            plan.nombre = this.state.data.tipo;
            plan.username=this.state.data.planName;
            plan.lastName=this.state.data.planPrice;
            

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
    this.peticionGet();
    toast.success('Plan eliminado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })

  }).catch(error=>{
    console.log(error);
    toast.error('Error al eliminar usuario', {position: toast.POSITION.BOTTOM_RIGHT });
    this.notifyError(error)
    
  })
}
  render (){

    const {form}=this.state;
    return (
        <div className="wraper">

        <Sidebar />
  
      

     
        <div className="section">
        <Header />        

        <div className="main-content">

          <h1>Planes y Servicios</h1>
            
        <p>Tabla con buscador para poder editar la informacion de los clientes</p>
        <button className="btnMaed" id='newASesor'   onClick={()=>{this.setState({form: null, tipoModal: 'insert'}); this.modalInsert()}}> <FontAwesomeIcon icon= {faPlus}/></button>    
        <table className='table-users'>

            <thead className='theadRU'>

              <tr>
         
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Accion</th>

              </tr>

            </thead>

          <tbody>
            {this.state.isData ? this.state.data.map(lavador => 
            (     
            <tr key={lavador.id} id={lavador.id}>
            
            <td>{lavador.tipo}</td>
            <td>{lavador.planName}</td>
            <td>{lavador.planPrice}</td>
            
            
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
          <p> Esto es dinamico Los servicios deben desactivarse </p> Warnnig de numeritos de creito fiscal
          <p>Verificar si se puede correc en Icloud Iphone</p>
            <Internos />
            <p> Esto es dinamico </p>
            <Externos />




            <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float: 'right'}} className='close' onClick={()=>this.modalInsert()}>X</span>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              
              <label htmlFor='tipo'>Tipo</label>
              <input type="text" className='form-control' name='tipo' id='tipo'
               onChange={this.handleChange}  value={form?form.tipo: ''} />
              <br/>
              <label htmlFor='planName'>Nombre</label>
              <input type="text" className='form-control' name='planName' id='planName'
               onChange={this.handleChange}  value={form?form.planName: ''} />
              <br/>
              <label htmlFor='planPrice'>Precio</label>
              <input type="text" className='form-control' name='planPrice' id='planPrice'
               onChange={this.handleChange}  value={form?form.planPrice: ''} />
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
              
              <label htmlFor='tipo'>Tipo</label>
              <input type="text" className='form-control' name='tipo' id='tipo'
               onChange={this.handleChange}  value={form?form.tipo: ''} />
              <br/>
              <label htmlFor='planName'>Nombre</label>
              <input type="text" className='form-control' name='planName' id='planName'
               onChange={this.handleChange}  value={form?form.planName: ''} />
              <br/>
              <label htmlFor='planPrice'>Precio</label>
              <input type="text" className='form-control' name='planPrice' id='planPrice'
               onChange={this.handleChange}  value={form?form.planPrice: ''} />
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
               Estás seguro que deseas eliminar este plan:  {form && form.planName}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=> {this.peticionDelete(); this.setState({modalEliminar: false})} }>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>



        </div>

    </div>  
        
   

  </div>
        )}
}

export default Planes_Servicios
