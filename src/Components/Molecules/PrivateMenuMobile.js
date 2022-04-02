import React from "react";
import { NavLink } from "react-router-dom";

const PrivateMenuMobile = () => {
  return (
    <ul className="grid">
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
    </ul>
  );
};

export default PrivateMenuMobile;
