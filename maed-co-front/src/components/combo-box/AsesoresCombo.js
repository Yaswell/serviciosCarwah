import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
const url = "http://localhost:3001/asesores";

class AsesoresCombo extends Component{
    state ={
        asesores:[]
    }
    componentDidMount(){
        axios.get(url).then((response) =>{
            this.setState({asesores: response.data})
        })
        .catch((error) =>{
            console.log(error);
            toast.error('Error para cargar asesores',{position: toast.POSITION.BOTTOM_RIGHT })
        });
    }
    render(){

    
    return (
        <select name="asesores" className="comboasesores">
            {this.state.asesores.map(elemento =>(
                <option key={elemento.id} value={elemento.id}> {elemento.nombre}</option>
            ))}
            
        </select>
    )
}
}

export default AsesoresCombo
