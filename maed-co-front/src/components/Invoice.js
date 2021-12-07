import React from 'react'
import '../../node_modules/bootstrap'
const Invoice = () => {
    return (
        <div className="col-sm-9 col-xs-12 content pt-3 pl-0 ">
                <h5 className="mb-0" ><strong>Factura</strong></h5>
                <span className="text-secondary">Ordenes <i className="fa fa-angle-right"></i> Facturas</span>
                
                <div className="row mt-3 factura" >
                    <div className="col-sm-12">
                        
                        <div className="mt-1 mb-3 p-3 button-container bg-white border shadow-sm lh-sm ">
                            <h3 className="m-3">Factura #INVC-001</h3>

                            <div className="dropdown-divider"></div>

                            <div className="row mt-3 mb-4">
                                
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="invoice-from">
                                        <address>
                                            
                                            <strong>Maed & CO</strong>
                                            <p className="mt-1 mb-0"> Coronel Rafael Fernandez Dominguez #5</p>
                                            <p mt-1 mb-0> Santo Domingo</p>
                                            <p>26/10/2021 08:00 PM</p>
                                        </address>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="invoice-to text-right">
                                        <address>
                                           
                                            <strong>Factura de Crédito Físcal</strong>
                                            <p className="mt-1 mb-0"> NFC: B022000000000</p>
                                            <p> Válida hasta: DD/MM/AAAA</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h5>RNC CLIENTE: 131000000000</h5>
                                <h6>Nombre o Razon Social:</h6>
                                    <p>Alamcenes Unidos</p>
                            </div>
                            

                            <div className="table-responsive mt-5">
                                <table className="table">
                                    <thead>
                                        <tr className="bg-secondary text-white">
                                            <th>#</th>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Unit cost</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Plan economico Ford Focus Blanco </td>
                                            <td>1</td>
                                            <td>$800</td>
                                            <td>$700</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Hamburguesa</td>
                                            <td>1</td>
                                            <td>$300</td>
                                            <td>$300</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <div className="text-right mt-4 p-4">
                                    <p><strong>Sub - Total: $1,000</strong></p>
                                    <p><strong>Descuento: $100</strong></p>
                                    <p><span>ITBIS(18%): $180</span></p>
                                    <h4 className="mt-2"><strong>Total: $10,180</strong></h4>
                                </div>

                                <div className="dropdown-divider"></div>

                                <div className="form-group text-right p-3">
                                   
                                    <button style={{backgroundColor:'#F8A01A'}} type="button" className="btn btn-theme ml-1"><i className="fa fa-print"></i> Imprimir</button>
                                </div>

                            </div>

                            
                        </div>
                       

                    </div>
                </div>

               
               

            </div>
    )
}

export default Invoice
