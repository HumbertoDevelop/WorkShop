import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import PrivateMenu from "../Molecules/PrivateMenu";

const menu = createRef();

const removeToken = async () => {
  localStorage.removeItem("token");
  window.location = "/login";
};
const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
            className="w-10 h-10 text-white p-2 bg-cyan-700 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SpeakUpEnglish</span>
        </NavLink>
        <nav
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"
          ref={menu}
        >
          {localStorage.getItem("token") ? <PrivateMenu /> : null}
        </nav>
        {localStorage.getItem("token") ? (
          <div className="flex items-center ">
            <a href="/login" onClick={() => removeToken()}>
              <button className="inline-flex items-center bg-cyan-700 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 rounded text-base mt-4 md:mt-0 text-stone-100">
                Cerrar Sesión
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </a>
            
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
