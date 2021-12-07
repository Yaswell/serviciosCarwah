import React, { Component } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
const url = "http://localhost:3001/lavadores";

class LavadoresCombo extends Component{
    state ={
        lavadores:[]
    }
    componentDidMount(){
        axios.get(url).then((response) =>{
            this.setState({lavadores: response.data})
        })
        .catch((error) =>{
            console.log(error);
            toast.error('Error para cargar lavadores',{position: toast.POSITION.BOTTOM_RIGHT })
        });
    }
    render(){

   
    return (
        <select name="lavadores" className="comboLavadores">
            {this.state.lavadores.map(elemento =>(
                <option key={elemento.id} value={elemento.id}> {elemento.nombre}</option>
            ))}
            
        </select>
    )
}
}

export default LavadoresCombo
