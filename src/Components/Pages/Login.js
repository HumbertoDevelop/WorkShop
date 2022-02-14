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
  Axios.get(`${process.env.REACT_APP_URL_API}/signup`)
    .then((r) => {
      console.log(data);
       r.data.map((e) => {
        console.log(e);
        if (
          data.email.toString() === e.email.toString() &&
          parseInt(data.password) === parseInt(e.password)
        ) {
          localStorage.setItem("token", e.email);
           alert(`Welcome back ${e.name}`);


           return window.location = "/";
           
          
        }
         alert("Correo o contraseña invalido porfavor intentelo denuevo");
      });
    })
    .catch((e) => {
      alert("Algo inesperado ocurrio!");
      console.log(`Error: ${e}`);
    });
};

const Login = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">
            Welcome Back! ☕
          </h1>
          <p className="leading-relaxed mt-4">
            Don't miss anymore time and{" "}
            <span className="text-cyan-400">TAKE YOUR COURSE NOW!</span>
          </p>
        </div>
        <form
          onSubmit={authentication.bind()}
          className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Iniciar Sesión
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Iniciar Sesión
          </button>

          <br />
          <NavLink to="/register">No tienes cuenta aun?</NavLink>
        </form>
      </div>
    </section>
  );
};
export default Login;
