import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
//import md5 from 'md5';
import Cookies from "universal-cookie";
const baseUrl = "http://localhost:3001/users/login";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          password: this.state.form.password,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("firstName", respuesta.firstName, { path: "/" });
          cookies.set("lastName", respuesta.lastName, { path: "/" });

          cookies.set("role", respuesta.role, { path: "/" });
          cookies.set("isAdmin", respuesta.isAdmin, { path: "/" });

          cookies.set("username", respuesta.username, { path: "/" });
          alert(`Bienvenido ${respuesta.firstName} ${respuesta.lastName}`);
          window.location.href = "./n";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("username")) {
      window.location.href = "./n";
    }
  }

  render() {
    return (
      <div class="container-login">
        <div class="wrap-login">
          <div class="login">
            <img src={logo} alt="IMG" />
          </div>

          <form class="login-form validate-form">
            <span class="login-form-title">Inicio de Sesion</span>

            <div
              class="wrap-input validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <div className="iconoInput-container">
                {/* <FontAwesomeIcon
                  className="icono"
                  icon={faEnvelope}
                  fontSize={1.5em}
                /> */}
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="  Usuario"
                />
              </div>
            </div>

            <div
              class="wrap-input validate-input"
              data-validate="Password is required"
            >
              <div className="iconoInput-container">
                {/* <FontAwesomeIcon className="icono" icon={faUnlockAlt} /> */}
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="  Contraseña"
                />
              </div>
            </div>

            <div class="container-login-form-btn">
              <Link to="/n">
                <button
                  className="login-form-btn"
                  onClick={() => this.iniciarSesion()}
                >
                  LOGIN
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
