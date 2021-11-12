import React from 'react'
import confirmacion from '../../assets/img/stateBar/confirmacion.svg'
import Statebar from '../../components/statebar';
import InfoClienteLabel from '../../components/InfoClienteLabel'
const FormConfirmacion = () => {
    return (
        <div>
            <Statebar icono={confirmacion} /> 
            <h2>Información del cliente</h2>
                    
                    <div className="sub-container">
                
                        <InfoClienteLabel title='Nombre' sugestion='Jose'/>
                        <InfoClienteLabel title='Apellido' sugestion='Perez'/>
                        <InfoClienteLabel title='Email' sugestion='Jose@gmail.com'/>
                        <InfoClienteLabel title='Telefono' sugestion='809-000-0000'/>
                        
                        <div class="table-container-confirm">
                            <div class="table-header">Placa</div>
                            <div class="table-header">Marca</div>
                            <div class="table-header">Modelo</div>
                            <div class="table-header">Color</div>
                            <div class="table-header">Tipo de vehiculo</div>
                            
                            <div class="table-item">A563345</div>
                            <div class="table-item">Ford</div>
                            <div class="table-item">Focus</div>
                            <div class="table-item">Negro</div>
                            <div class="table-item">Carro</div>
                       
                        </div>
                        <p>Probar esto con un lable </p>
                        <InfoClienteLabel title= 'Objetos Dejados' sugestion= 'No' />
                        <InfoClienteLabel title= 'Choques o rayaduras' sugestion= 'No' />

                        <h2>Servicio</h2>
                        <InfoClienteLabel title= 'Lavador' sugestion= 'Nicolas' />
                        <InfoClienteLabel title= 'Asesor' sugestion= 'Mario' />

                        <div class="resumen">
                            <div class="plan-seleccionado">
                                <h3>Plan Economico</h3>
                                <p>RD$300</p>
    
                            </div>
                            <div class="alimentos">
                                <h3>Alimentos y Bebidas</h3>
                                <p>Refresco RD$50</p>
                                
                            </div>
                            <div class="des">
                                <h4>Descuento</h4> <input type="number" />     
                            </div>
                        
                            <h3>Total: </h3>

                        </div>
            </div>
        </div>
    )
}

export default FormConfirmacion
