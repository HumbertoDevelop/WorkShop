import React from "react";
import { NavLink } from "react-router-dom";
import PrivateMenu from "../Molecules/PrivateMenu";

const removeToken = () => {
  localStorage.removeItem("token");
  window.location = "/login";
};
const Header = () => {
  return (
    <header className="bg-cyan-800 text-white body-font ">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-cyan-400 p-2 bg-cyan-900 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">SpeakUpEnglish</span>
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l	flex flex-wrap items-center ">
          {localStorage.getItem("token") ? <PrivateMenu /> : null}
        </nav>
        {localStorage.getItem("token") ? (
          <div className="flex items-center ">
            <a href="/login" onClick={() => removeToken()}>
              <button className="inline-flex items-center  border-0  hover:text-red-400 rounded text-base mt-4 md:mt-0 text-stone-100">
                Cerrar Sesión
              </button>
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
