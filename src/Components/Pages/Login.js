import React from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

//Promise Axios.get()
const axiosGet = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Axios.get(`${process.env.REACT_APP_URL_API}/signup`)
          .then((r) => {
            let email = r.data.map((user) => user.email);
            let pass = r.data.map((user) => user.password);

            if (
              email.find((d) => d === data.email) &&
              pass.find((d) => d === data.password)
            ) {
              localStorage.setItem("token", data.email);

              window.location = "/";
            } else {
             alert("Contraseña o Email invalido!");
            }

           
          })
          .catch((e) => {
            alert("Algo inesperado ocurrio!");
            console.log(`Error: ${e}`);
          })
      );
    }, 1000);
  });
};

const authentication = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value,
  };
  await axiosGet(data);
};

const Login = () => {
  return (
    <section className=" bg-gray-900 body-font bg-[url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center text-slate-900">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl ">
            Welcome Back! ☕
          </h1>
          <p className="leading-relaxed mt-4">
            Don't miss anymore time and{" "}
            <span className="text-red-700 font-semibold">TAKE YOUR COURSE NOW!</span>
          </p>
        </div>
        <form
          onSubmit={authentication.bind()}
          className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className=" text-lg font-medium title-font mb-5">
            Iniciar Sesión
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-cyan-500 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-stale rounded border border-cyan-600 focus:border-cyan text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
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
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-cyan-700 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-800 rounded text-lg"
          >
            Iniciar Sesión
          </button>

          <br />
          <NavLink className="w-max" to="/register">
            No tienes cuenta aun?
          </NavLink>
        </form>
      </div>
    </section>
  );
};
export default Login;
