import Axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const registration = (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    name: form.fullname.value,
    password: form.password.value,
  };

  Axios.post(`${process.env.REACT_APP_URL_API}/signup`, data)
    .then((r) => {
      localStorage.setItem('token', r.data.email);
      alert(`Te has registrado correctamente Sr ${form.fullname.value}`);
      window.location = "/";
    })
    .catch((e) => {
      alert("Error al crear usuario");
      console.log(`Error: ${e}`);
    });
};

const Register = () => {
  return (
    <div className="ed-grid ">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-40 s-center">
        <h1 className="center">Crear Cuenta</h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="fullname">
              Nombre Completo <br />
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Ingrese su nombre"
                required
              />
            </label>
          </div>
          <div className="l-block"></div>
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
            <input type="submit" className="button " value="Registrar" />
            <br />
            <NavLink to="/login">Ya tienes cuenta?</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
