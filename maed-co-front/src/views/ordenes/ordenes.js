import React from 'react'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const ordenes = () => {
    return (
        <div className="wraper">

            <Sidebar />
      
          

         
            <div className="section">
            <Header />        

            <div className="main-content">

              <h1>Ordenes</h1>
                <h3>El Order# será un Link que me enviará a un componente que cargará la informacion de esta orden</h3>
              <div className="tabla">
              <div class="product-list">
                        
                        <div class="row border-bottom mb-4">
                            <div class="col-sm-8 pt-2"><h6 class="mb-4 bc-header">Order listing</h6></div>
                            <div class="col-sm-4 text-right pb-3">
                                <button type="button" class="btn btn-danger icon-round shadow pull-right">
                                    <i class="fas fa-trash"></i>
                                </button>

                                <div class="pull-right mr-3 btn-order-bulk">
                                    <select class="shadow bg-secondary bulk-actions">
                                        <option data-display="<span class='text-white'><b>Bulk status</b></span>">Status options</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Cancelled</option>
                                        <option value="4">Delivered</option>
                                    </select>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="table-responsive product-list">
                            
                            <table class="table table-bordered table-striped mt-3" id="productList">
                                <thead>
                                    <tr>
                                        <th style={{width: '10px;'}} class="p-0 pr-4 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="orderAll"/>
                                                    <label for="orderAll"></label>
                                                </span>
                                            </div>
                                        </th>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Order date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order1"/>
                                                    <label for="order1"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#13</td>
                                        <td class="align-middle">
                                            Stephanie Cott
                                        </td>
                                        <td class="align-middle"><span class="badge badge-warning">Pending</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order2"/>
                                                    <label for="order2"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#14</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-danger">Cancelled</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order3"/>
                                                    <label for="order3"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#15</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-success">Delivered</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order4"/>
                                                    <label for="order4"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#16</td>
                                        <td class="align-middle">
                                            Stephanie Cott
                                        </td>
                                        <td class="align-middle"><span class="badge badge-warning">Pending</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order5"/>
                                                    <label for="order5"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#17</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-danger">Cancelled</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order6"/>
                                                    <label for="order6"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#18</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-success">Delivered</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order7"/>
                                                    <label for="order7"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#19</td>
                                        <td class="align-middle">
                                            Stephanie Cott
                                        </td>
                                        <td class="align-middle"><span class="badge badge-warning">Pending</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order8"/>
                                                    <label for="order8"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#20</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-danger">Cancelled</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order9"/>
                                                    <label for="order9"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#21</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-success">Delivered</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order10"/>
                                                    <label for="order10"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#22</td>
                                        <td class="align-middle">
                                            Stephanie Cott
                                        </td>
                                        <td class="align-middle"><span class="badge badge-warning">Pending</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order11"/>
                                                    <label for="order11"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#23</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-danger">Cancelled</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: '10px;'}} class="p-0 pr-1 align-middle">
                                            <div class="form-check-box cta">
                                                <span class="color1">
                                                    <input type="checkbox" id="order12"/>
                                                    <label for="order12"></label>
                                                </span>
                                            </div>
                                        </td>
                                        <td>Ord#24</td>
                                        <td class="align-middle">
                                            Andy Webb
                                        </td>
                                        <td class="align-middle"><span class="badge badge-success">Delivered</span></td>
                                        <td class="align-middle">$200</td>
                                        <td>15/09/2018</td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate"><i class="fa fa-pencil"></i></button>
                                            <button class="btn btn-danger"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

              </div>
           
                    

                
            </div>

        </div>  
            
       

      </div>
    )
}



export default ordenes



