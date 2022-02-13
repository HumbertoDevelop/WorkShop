import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  
const PrivateMenu = () => {
  return (
      <ul>
          <li title="Enlace de inicio">
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li title="Enlace de Especialidades">
                <NavLink to="/especialidades">Especialidades</NavLink>
              </li>
              <li title="Enlace de Cursos">
                <NavLink to="/cursos">Cursos</NavLink>
              </li>
              <li title="Enlace de Profesores">
                <NavLink to="/profesores">Profesores</NavLink>
              </li>
              {localStorage.getItem("token") ? (
                <li title="Enlace de Cerrar Sesión">
                  <a href="/login" onClick={() => removeToken()}>Cerrar Sesión</a>
                </li>
              ) : null}
      </ul>
  )
}

export default PrivateMenu