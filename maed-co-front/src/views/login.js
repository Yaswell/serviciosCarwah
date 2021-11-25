import React from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import {faEnvelope, faUnlockAlt} from '@fortawesome/free-solid-svg-icons';



export const login = () => {
    return (
       
        	<div  class="container-login">
				<div class="wrap-login">
					<div class="login" >
						<img src={logo} alt="IMG" />
					</div>

					<form class="login-form validate-form">
						<span class="login-form-title">
							Inicio de Sesion
						</span>

						<div class="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<div className='iconoInput-container'>
							<FontAwesomeIcon className='icono' icon={faEnvelope} />
							<input class="input" type="email" name="email" placeholder= "  Usuario"  /> 
							</div>
							
						</div>

						<div class="wrap-input validate-input" data-validate = "Password is required">
							<div className ='iconoInput-container'>
							<FontAwesomeIcon className='icono' icon= {faUnlockAlt} />
							<input class="input" type="password" name="pass" placeholder="  Contraseña" />
							
							</div>
						</div>
						
						<div class="container-login-form-btn">
							<Link to='/n'>
							<button className="login-form-btn"  onSubmit={() => { window.location.href = 'localhost:3000/n';}}>
								LOGIN
							</button>
							</Link>
						</div>

						

					
				</form>
			</div>
		</div>
	

    )
}

export default login
