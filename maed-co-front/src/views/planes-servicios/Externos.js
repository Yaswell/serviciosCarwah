import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const url= 'http://localhost:3001/outside_services';
const options = [
  {
    label: "Carro",
    value: "carro",
  },
  {
    label: "Otros",
    value: "otros"
  }
]
class Externos extends Component  {
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
            desconPintura: "",
            enceradoMano: "",
            enceradoMaquina: "",
            hidPlasticos: "",
            pulidoFocos: "",
            reconsPintura: "",
            tipoVehiculo: ""
          }
        };
      }
    
      
      async peticionGet() {
        const response = await fetch(url);
        if (!response.ok) {
          
          console.log(response);
        }
        const data = await response.json();  
        if (data.error) {
         toast.error('Error para registrar lavador',{position: toast.POSITION.BOTTOM_RIGHT });
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
    
      seleccionarUsuario=(usuario)=>{
        this.setState({
        
          form: {
            id: usuario.id,
            desconPintura: usuario.desconPintura,
            enceradoMano: usuario.enceradoMano,
            enceradoMaquina:  usuario.enceradoMaquina,
            hidPlasticos:  usuario.hidPlasticos,
            pulidoFocos:  usuario.pulidoFocos,
            reconsPintura:  usuario.reconsPintura,
            tipoVehiculo: usuario.tipoVehiculo
            

           
            
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
          await axios.put(url+"/"+this.state.form.id, this.state.form)
          .then(response=>{
              
            var dataNueva = this.state.data;
            dataNueva.map(cliente => {
              if(cliente.id ===this.state.data.id) {
                
                cliente.nombre = this.state.data.nombre;
                
                this.peticionPost();
              }
              this.setState(dataNueva);
             
            });
            toast.success('Servicio Externo actualizado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })
            this.peticionGet();
           
          }).catch(error=>{
            console.log(error);
            toast.error('Error al actualizar serivio', {position: toast.POSITION.BOTTOM_RIGHT });
            
            
          })
        }
        
      
        peticionDelete=async()=>{
        await axios.delete(url+"/"+this.state.form.id).then(response=>{
          this.setState({modalEliminar: false});
          this.peticionGet();
          toast.success('Servicio Externo eliminado exitosamente',{position: toast.POSITION.BOTTOM_RIGHT })
      
        }).catch(error=>{
          console.log(error);
          toast.error('Error al eliminar este servicio', {position: toast.POSITION.BOTTOM_RIGHT });
         
          
        })
        }


    render(){

    
    return (
      <div>
        <div className='lavadores trabajadores'> 
          <h3>Externos</h3>
             <button className="btnMaed" id='newLavador'   onClick={()=>{this.setState({form: null, tipoModal: 'insert'}); this.modalInsert()}}><FontAwesomeIcon icon= {faPlus}/></button>    
                <table className='table-users'>

                <thead className='theadRU'>

                <tr>
                    <th>Tipo de vehiculo </th>
                    <th>Desco Pintura</th>
                    <th>Encerado a Mano</th>
                    <th>Encerado a maquina</th>
                    <th>Hidratacion plasticos</th>
                    <th>Pulido Focos</th>
                    <th>Reconstruccion Pintura</th>
                    <th>Accion</th>

                </tr>

                </thead>

                <tbody>
            {this.state.isData ? this.state.data.map(lavador => 
            (     
            <tr key={lavador.id} id={lavador.id}>
                <td>{lavador.tipoVehiculo} </td>
                <td>{lavador.desconPintura}</td>
                <td>{lavador.enceradoMano}</td>
                <td>{lavador.enceradoMaquina}</td>
                <td>{lavador.hidPlasticos}</td>
                <td>{lavador.pulidoFocos}</td>
                <td>{lavador.reconsPintura}</td>


                
                <td>
                <button id='edit' onClick={ ()=> {this.seleccionarUsuario(lavador);  this.modalActualizar(lavador)}}><FontAwesomeIcon className='actionsUsuario' icon={faEdit}/> </button>
                {"  "}
                <button  id="trash" onClick = {()=> {this.setState({modalEliminar: true}); this.seleccionarUsuario(lavador); }}><FontAwesomeIcon className='actionsUsuario' icon={faTrashAlt}/> </button>

                </td>


            </tr>
            )
            ): <tr> No Service</tr>
            }
                </tbody>
                </table>
                
                <Modal isOpen={this.state.modalInsert}>
                  <ModalHeader style={{display: 'block'}}>
                    <span style={{float: 'right'}} className='close' onClick={()=>this.modalInsert()}>X</span>
                  </ModalHeader>

                  <ModalBody>
                    <div className="form-group">
                      <label> Tipo de Vehiculo </label> 
                                    
                      <select className='form-control' onChange={this.handleChange} name='tipoVehiculo' id='tipoVehiculo'> 
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <br/>

                      <label htmlFor='desconPintura'>Desconstruccion de Pintura</label>
                      <input type="text" className='form-control' name='desconPintura' id='desconPintura'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.desconPintura: ''} />
                      <br/>
                      <label htmlFor='enceradoMano'>Encerado a mano </label>
                      <input type="text" className='form-control' name='enceradoMano' id='enceradoMano'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.enceradoMano: ''} />
                      <br/>
                      <label htmlFor='enceradoMaquina'>Encerado a maquina</label>
                      <input type="text" className='form-control' name='enceradoMaquina' id='enceradoMaquina'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.enceradoMaquina: ''} />
                      <br/>
                      <label htmlFor='hidPlasticos'>Hidratacion de plasticos</label>
                      <input type="text" className='form-control' name='hidPlasticos' id='hidPlasticos'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.hidPlasticos: ''} />
                      <br/>
                      <label htmlFor='pulidoFocos'>Pulido de focos</label>
                      <input type="text" className='form-control' name='pulidoFocos' id='pulidoFocos'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.pulidoFocos: ''} />
                      <br/>
                      <label htmlFor='reconsPintura'>Reconstruccion de pintura</label>
                      <input type="text" className='form-control' name='reconsPintura' id='reconsPintura'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.reconsPintura: ''} />
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
                      
                    <label> Tipo de Vehiculo </label> 
                     
                       <select className='form-control' onChange={this.handleChange} name='tipoVehiculo' id='tipoVehiculo'> 
                        <option  onChange={this.handleChange} name='tipoVehiculo' value={this.state.form?this.state.form.tipoVehiculo: ''}>Carro</option>
                        <option onChange={this.handleChange} name='tipoVehiculo' value={this.state.form?this.state.form.tipoVehiculo: ''}>Otros</option>
                      </select>
                      <br/>

                      <label htmlFor='desconPintura'>Desconstruccion de Pintura</label>
                      <input type="text" className='form-control' name='desconPintura' id='desconPintura'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.desconPintura: ''} />
                      <br/>
                      <label htmlFor='enceradoMano'>Encerado a mano </label>
                      <input type="text" className='form-control' name='enceradoMano' id='enceradoMano'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.enceradoMano: ''} />
                      <br/>
                      <label htmlFor='enceradoMaquina'>Encerado a maquina</label>
                      <input type="text" className='form-control' name='enceradoMaquina' id='enceradoMaquina'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.enceradoMaquina: ''} />
                      <br/>
                      <label htmlFor='hidPlasticos'>Hidratacion de plasticos</label>
                      <input type="text" className='form-control' name='hidPlasticos' id='hidPlasticos'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.hidPlasticos: ''} />
                      <br/>
                      <label htmlFor='pulidoFocos'>Pulido de focos</label>
                      <input type="text" className='form-control' name='pulidoFocos' id='pulidoFocos'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.pulidoFocos: ''} />
                      <br/>
                      <label htmlFor='reconsPintura'>Reconstruccion de pintura</label>
                      <input type="text" className='form-control' name='reconsPintura' id='reconsPintura'
                        onChange={this.handleChange}  value={this.state.form?this.state.form.reconsPintura: ''} />
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
                        Estás seguro que deseas eliminar este servicio:  {this.state.form && this.state.form.tipoVehiculo}
                    </ModalBody>
                    <ModalFooter>
                      <button className="btn btn-danger" onClick={()=> {this.peticionDelete(); this.setState({modalEliminar: false})} }>Sí</button>
                      <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                    </ModalFooter>
                </Modal>
          </div>
      </div>
    )}
}

export default Externos
