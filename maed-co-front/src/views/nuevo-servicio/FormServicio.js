import React from 'react'
import servicio from '../../assets/img/stateBar/servicio.svg'
import Statebar from '../../components/statebar';
import IconoNuevo from '../../assets/img/btnAgregar.png';
import noData from '../../assets/img/base-de-datos.png'
import Selector from '../../components/selector'
import InfoCliente from '../../components/InfoCliente'
import InfoPlanes from '../../components/infoPlanes'

const lavadores = [
    {
        id:1,
        nombre:'Mario'
    },
    {
        id:2,
        nombre:'Jose'
    },
    {
        id:3,
        nombre:'Carlos'
    }
    
]
const lavadores2 = [
    {
        id:1,
        nombre:'Seleccione'
    },
    {
        id:2,
        nombre:'Jose'
    },
    {
        id:3,
        nombre:'Carlos'
    }
    
]
const planes = [
    {
        id:1,
        plan:'Economico',
        precio:'RD$200'
    },
    {
        id:2,
        plan:'VIP',
        precio:'RD$300'
    },
    {
        id:3,
        plan:'Diamond',
        precio:'RD4200'
    },
    {
        id:4,
        plan:'Economico',
        precio:'RD$200'
    },
    {
        id:5,
        plan:'VIP',
        precio:'RD$300'
    },
    {
        id:6,
        plan:'Diamond',
        precio:'RD4200'
    }
    
]

const FormServicio = ({formData, setFormData}) => {
    return (
        <div>
           <Statebar icono={servicio} /> 
             <div className="sub-container">
             <div className='info-cliente'>
                            
                            <Selector title='Lavadores' opciones= {lavadores} />
                            <Selector title= 'Asesores' opciones = {lavadores2} />
                           

                            <InfoCliente title = 'Tipo de Vehiculo' sugestion= 'Esto no es editable, viene de Db' readOnly />
                            <InfoCliente title = 'Objetos dejados' sugestion= 'Text'  value={formData.objeto} 
                                onChange= {(event) =>{ setFormData({...formData, objeto: event.target.value});
                            }} />
                            <InfoCliente title = 'Choques o rayaduras' sugestion= 'Text' value={formData.choques} 
                                onChange= {(event) =>{ setFormData({...formData, choques: event.target.value});
                            }}   />
                            
                        </div>
                        
                        <div className = 'planes'>
                            <h2>Planes</h2>
                            <InfoPlanes planes= {planes} value={formData.plan} 
                                onChange= {(event) =>{ setFormData({...formData, plan: event.target.value});
                            }} />
                        </div>
                        <div class="formar-plan">
                        <h2>Forma tu plan</h2>

                        <div class="planes-individuales">
                            
                            <div class="planes-interiores">
                                <h3>Servicio Interior</h3>
                                <div class="servicio">
                                    <div class="info-servicio">
                                        <input type="checkbox" />Hidratación Tablero <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Ozono <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Hidratación Leather/Vynil <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Limpieza Interior <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Lavado de Motor <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Limpieza Interior <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="total">
                                        <h5>Total </h5>
                                        <h6>RD$ 0</h6>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="planes-exteriores">
                                <h3>Servicio Exterior</h3>
                                <div class="servicio">
                                    <div class="info-servicio">
                                        <input type="checkbox" />Descon pintura <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Reconstrucción de pintura <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Hidratación de plasticos <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Enceredo a mano <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Encerado a maquina <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Pulido de focos <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="info-servicio">
                                        <input type="checkbox" />Reconstrucción y revitalización <h6><strong>RD$200</strong></h6>
                                    </div>
                                    <div class="total">
                                        <h5>Total </h5>
                                        <h6>RD$ 0</h6>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                    <div class="alimentos">
                        <h2>Alimentos y Bebidas</h2>
                        <div class="search-add">
                            <input type="text" placeholder="Alimento o bebida"/>
                            <input type="text" placeholder="Precio"/>
                            <button class="btnNew"><img src={IconoNuevo} alt="buscar"/> Agregar</button>
                        </div>

                        <div class="tabla-alimentos">
                            <table>
                                <td>
                                    <h4>NO DATA</h4>
                                    
                                    <img src={noData} alt="no_data" />
                                        
                                        
                                </td>
                            </table>
                        </div>

                        </div>

                <div class="des">
                                <h4>Descuento</h4> <input type="number" />     
                            </div>
                        
                            <h3>Total: </h3>

             </div>
             
        </div>
    )
}

export default FormServicio
