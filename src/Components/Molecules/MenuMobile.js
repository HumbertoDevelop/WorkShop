/** @format */
// import { slide as Menu } from "react-burger-menu"; not working
import React from "react";
import { NavLink } from "react-router-dom";
import PrivateMenuMobile from "./PrivateMenuMobile";

const MenuMobile = (props) => {
	return (
		// <Menu {...props}> not working
			<div
				className="container mx-auto  py-2 items-center justify-center h-80"
				id="outer">
				<NavLink
					to="/"
					className="flex title-font font-medium justify-center items-center text-white mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-cyan-400 p-2 bg-cyan-900 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl text-white">SpeakUpEnglish</span>
				</NavLink>
				<nav
					className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l	grid items-center "
					id="page-wrap">
					{localStorage.getItem("token") ? <PrivateMenuMobile /> : null}
				</nav>
				{localStorage.getItem("token") ? (
					<div className="grid items-center ">
						<a href="/login" onClick={props.removeToken}>
							<button className="inline-flex items-center  border-0  hover:text-yellow-500 rounded text-base mt-4 md:mt-0 text-stone-100 mr-4">
								Cerrar Sesión
							</button>
						</a>
						<button className="button button--dark bg-yellow-500 p-1 px-4 rounded text-slate-900 font-semibold text-xl">
							<NavLink to="/carrito">🛒 {props.cart}</NavLink>
						</button>
					</div>
				) : null}
			</div>
		// </Menu> 
	);
};

export default MenuMobile;
