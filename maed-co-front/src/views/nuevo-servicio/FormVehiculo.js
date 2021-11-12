import React from 'react'
import ButtonNew from '../../components/ButtonNew'
import vehiculo from '../../assets/img/stateBar/vehiculo.svg'
import Statebar from '../../components/statebar';
const Form2 = () => {
    return (
        <div>
             <Statebar icono={vehiculo} /> 
             <div className="sub-container">
                <h3>Jose Pérez</h3>
                
                <div className="table-vehiculos">
                    <div className='agregarVehiculo'>
                        <ButtonNew  text='Nuevo Vehiculo'/>
                    </div>
                    

                    <form action="">
                        <table>
                            <tbody>
                                <td>Hey</td>
                            </tbody>
                        </table>
                    </form>
                </div>
             </div>
            
        </div>
    )
}

export default Form2
