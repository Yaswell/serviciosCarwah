import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const url= 'http://yaswell:3001/plans';


class Roles_y_Usuario extends Component {
  state= {
    data:[]
  }

  penticionGet= ()=>{
    axios.get(url).then(response=>{
      console.log(response.data)
    })

  }

  componentDidMount() {
    this.penticionGet();

  }


  render(){

 
    return (
        <div className="wraper">

        <Sidebar />
  
      

     
        <div className="section">
        <Header />        

        <div className="main-content">

          <h1>Usuario</h1>
            
        <p>Tabla con buscador para poder editar la informacion de los clientes</p>
                

            
        </div>

    </div>  
        
   

  </div>
    )
}
}
export default Roles_y_Usuario
