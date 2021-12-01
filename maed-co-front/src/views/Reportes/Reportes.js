import React, {useState, useEffect}  from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import  Button from '../../components/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, TextField} from '@material-ui/core';
import MaterialTable from "material-table";
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPrint} from '@fortawesome/free-solid-svg-icons';


const columns= [
  {title: 'id', field: 'id'},
  {title: 'Nombre', field: 'firstName'},
  {title: "Placa", field: 'placa'},
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

const url= 'http://localhost:3001/reportes';

function Reportes() {
  const styles= useStyles();
  const [data, setData] = useState([]);
  const [clienteSeleccionado , setclienteSeleccionado ]=useState({
    firstName: "",
    lastName: "",
    id: "",
    phone: "",
    email: ""
  })
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


























    return (
        <div className="wraper">

            <Sidebar />

          

         
            <div className="section">
            <Header />        

            <div className="main-content">

              <h1>Reportes</h1>
              <div className='filtros'>
              <div className='filtrosReportes'><Button text='Semana' /><Button text='Mes'/> <Button text='Año'/> </div>   
              <FontAwesomeIcon className='printer' icon={faPrint} />
              </div>  
              
              <MaterialTable
          columns={columns}
          data={data}
          title='Reportes'
          
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

        </div>  
            
       

      </div>
    )
}

export default Reportes
