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
  if (data.email || data.name || data.password !== "") {
    Axios.post(`${process.env.REACT_APP_URL_API}/signup`, data)
      .then((r) => {
        alert(`Te has registrado correctamente ${data.name}`);
        window.location = "/login";
      })
      .catch((e) => {
        alert("Algo inesperado ocurrio al crear usuario");
        console.log(`Error: ${e}`);
      });
  } else {
    alert("Debes rellenar los campos");
  }
};

const Register = () => {
  return (
    <section className=" bg-gray-900 body-font bg-[url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl ">
            <span className="text-red-600">Curso 100% online</span> Aprende
            inglés más rápido y más fácil este 2022
          </h1>
          <p className="leading-relaxed mt-4">
            Clases en directo{" "}
            <span className="text-yellow-900 font-semibold">ILIMITADAS</span> las 24 horas del
            día Profesores nativos Preparación para exámenes internacionales
          </p>
        </div>
        <form
          onSubmit={registration.bind()}
          className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className=" text-lg font-medium title-font mb-5">
            Crear Cuenta
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="fullname"
              className="leading-7 text-sm "
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full bg-cyan-500 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-stale rounded border border-cyan-600 focus:border-cyan text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-cyan-500 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-stale rounded border border-cyan-600 focus:border-cyan text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-cyan-500 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-stale rounded border border-cyan-600 focus:border-cyan text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Registrar
          </button>
          <NavLink className="w-max" to="/login">
            Ya tienes cuenta?
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default Register;
