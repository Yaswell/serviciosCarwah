import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, TextField, Button} from '@material-ui/core';
import MaterialTable from "material-table";
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const columns= [
  {title: 'Nombre', field: 'firstName'},
  {title: "Apellido", field: 'lastName'},
  {title: 'Telefono', field: 'phone'},
  {title: 'Email', field: 'email'}
]

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

const url= 'http://localhost:3001/clients';


function Clientes (){
  const styles= useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [clienteSeleccionado , setclienteSeleccionado ]=useState({
    firstName: "",
    lastName: "",
    id: "",
    phone: "",
    email: ""
  })
  const notifySuccess =() => {
    toast.success('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })
  
    
}
  const notifyError=() => {
   
    toast.error('Notificacion',{position: toast.POSITION.BOTTOM_RIGHT })
    
}
  const handleChange=e=>{
    const {name, value}=e.target;
    setclienteSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }


  const peticionGet= async()=>{
    await axios.get(url)
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
  }

  useEffect(()=>{
    peticionGet();
  },[])


  const peticionPost=async()=>{
    await axios.post(url, clienteSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
      notifySuccess()
    }).catch(error=>{
      console.log(error);
      notifyError();
    })
  }

  const peticionPut=async()=>{
    await axios.put(url+"/"+clienteSeleccionado.id, clienteSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(cliente=>{
        if(cliente.id===clienteSeleccionado.id){
          cliente.firstName=clienteSeleccionado.firstName;
          cliente.lastName=clienteSeleccionado.lastName;
          cliente.phone=clienteSeleccionado.phone;
          cliente.email=clienteSeleccionado.email;
        }
      });
      setData(dataNueva);
      notifySuccess()
      abrirCerrarModalEditar();

    }).catch(error=>{
      console.log(error);
      notifyError();
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(url+"/"+clienteSeleccionado.id)
    .then(response=>{
      setData(data.filter(cliente=>cliente.id!==clienteSeleccionado.id));
      notifySuccess()
      abrirCerrarModalEliminar();
      
    }).catch(error=>{
      console.log(error);
      notifyError();
    })
  }

  const seleccionarCliente=(cliente, caso)=>{
    setclienteSeleccionado(cliente);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }


  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Cliente</h3>
      <TextField className={styles.inputMaterial} label="Nombre" name="firstName" onChange={handleChange} value={clienteSeleccionado && clienteSeleccionado.firstName}/>
      <br />
      <TextField className={styles.inputMaterial} label="Apellido" name="lastName" onChange={handleChange} value={clienteSeleccionado &&clienteSeleccionado.lastName}/>          
<br />
<TextField className={styles.inputMaterial} label="Telefono" name="phone" onChange={handleChange} value={clienteSeleccionado &&clienteSeleccionado.phone}/>
      <br />
<TextField className={styles.inputMaterial} label="email" name="email" onChange={handleChange} value={clienteSeleccionado &&clienteSeleccionado.email}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar al cliente <b>{clienteSeleccionado  && clienteSeleccionado.firstName}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

    return (
        <div className="wraper">

            <Sidebar/>
      
          

         
            <div className="section">
            <Header />        

            <div className="main-content">

              <h1>Clientes</h1>
                
            <p>Tabla con buscador para poder editar la informacion de los clientes</p>
                    
            <MaterialTable
          columns={columns}
          data={data}
          title='Clientes'
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar',
              onClick: (event, rowData) => seleccionarCliente(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar',
              onClick: (event, rowData) => seleccionarCliente(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"

            }
          }}
        />
                
            </div>
            <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>

        </div>  
            
       

      </div>
    )
}

export default Clientes
