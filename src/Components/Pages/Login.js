import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const authentication = (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value,
  };
  Axios.post(`${process.env.REACT_APP_URL_API}/login`, data)
    .then((r) => {
      localStorage.setItem("token", r.data.email);
      window.location = "/";
    })
    .catch((e) => {
      console.log(e);
      alert("Error al iniciar sesión");
    });
};

const Login = () => {
  return (
    <div className="ed-grid ">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-40 s-center">
        <h1 className="center">Iniciar Sesión</h1>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electronico <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su email"
                required
              />
            </label>
          </div>
          <div className="l-block"></div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese su password"
                required
              />
            </label>
          </div>
          <div className="l-block"></div>
          <div className="form_item ">
            <input type="submit" className="button " value="Iniciar sesion" />
            <br />
            <NavLink to="/register">No tienes cuenta aun?</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
