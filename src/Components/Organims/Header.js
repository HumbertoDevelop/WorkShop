import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PrivateMenu from "../Molecules/PrivateMenu";

const removeToken = () => {
  localStorage.removeItem("token");
  window.location = "/login";
};
const Header = ({ cart }) => {
  
  return (
    <header className="bg-cyan-800 text-white body-font fixed top-0 left-0 right-0 z-20 px-4">
      <div className="container mx-auto flex  py-2 flex-col md:flex-row items-center">
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
              <button className="inline-flex items-center  border-0  hover:text-yellow-500 rounded text-base mt-4 md:mt-0 text-stone-100 mr-4">
                Cerrar Sesión
              </button>
            </a>
            <button className="button button--dark bg-yellow-500 p-1 px-4 rounded text-slate-900 font-semibold text-xl">
              <NavLink to='/carrito'>🛒 {cart.length}</NavLink>
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.coursesCart,
});

export default connect(mapStateToProps, {})(Header);
