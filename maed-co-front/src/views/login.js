import React from 'react'
import logo from '../assets/img/logo.png';
import '../assets/css/style.css';



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
						<input class="input" type="text" name="email" placeholder="Email" />
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input validate-input" data-validate = "Password is required">
						<input class="input" type="password" name="pass" placeholder="Password" />
						<span class="focus-input"></span>
						<span class="symbol-input">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login-form-btn">
                   
						<button class="login-form-btn" >
							Login
						</button>
					</div>

					

					
				</form>
			</div>
		</div>
	

    )
}

export default login
