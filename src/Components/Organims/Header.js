import React, { createRef } from "react";
import { NavLink } from "react-router-dom";

const menu = createRef();
const removeToken = () => {
  localStorage.removeItem("token");
  window.location = "/login";
};

const Header = () => {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 cols-lg-10">
        <div className="s-cols-2  s-cross-center">
          <NavLink to="/">
            <img
              src="https://www.openenglish.com/wp-content/uploads/sites/24/2021/09/cropped-LogoMillon-curvas.png"
              alt="logoPage"
              className="main-logo"
            />
          </NavLink>
        </div>
        <div className="s-cols-3 lg-cols-8 main-menu-container s-cross-center s-main-end">
          <nav className="main-menu" ref={menu}>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
