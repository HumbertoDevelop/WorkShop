/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({ title, subtitle, home, specialities, courses, teachers }) => (
	<div className="relative">
		{home ? (
			<section >
				<div
					className={`body-font  bg-[url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center bg-fixed h-96  blur-sm `}></div>
				<div className="container mx-auto flex flex-wrap items-center justify-around bg-stone-300 py-2 opacity-80 absolute top-1/2 sm:top-1/3 md:top-1/2 left-0 right-0 px-3 ">
					<h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5  ">
						{title}
					</h2>
					<div className="md:w-1/3 text-right">
						<div className="leading-relaxed ">
							<h3>{subtitle}</h3>
						</div>
						<div className="flex justify-end md:mt-4 mt-6">
							<NavLink to="/cursos">
								<button className="inline-flex text-black bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-cyan-800 hover:text-white rounded">
									Ver cursos
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</section>
		) : specialities ? (
			<section>
				<div
					className={`  body-font bg-[url('https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}></div>
				<div className="container   mx-auto flex flex-wrap justify-center  absolute md:top-1/2 sm:top-1/3 md left-0 right-0">
					<div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-full text-center sm:w-2/3 content-start sm:pr-10">
						<div className="w-full sm:p-4 px-4 bg-cyan-900 rounded opacity-80 text-white">
							<h1 className="title-font font-medium text-xl mb-2 ">{title}</h1>
							<div className="leading-relaxed">
								<h3>{subtitle}</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : courses ? (
			<section>
				<div
					className={`  body-font bg-[url('https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}></div>
				<div className="container   mx-auto flex flex-wrap justify-center  absolute md:top-1/2 sm:top-1/3 md left-0 right-0">
					<div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-full text-center sm:w-2/3 content-start sm:pr-10">
						<div className="w-full sm:p-4 px-4 bg-cyan-900 rounded opacity-80 text-white">
							<h1 className="title-font font-medium text-xl mb-2 ">{title}</h1>
							<div className="leading-relaxed">
								<h3>{subtitle}</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : teachers ? (
			<section>
				<div
					className={`  body-font bg-[url('https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}></div>
				<div className="container   mx-auto flex flex-wrap justify-center  absolute md:top-1/2 sm:top-1/3 md left-0 right-0">
					<div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-full text-center sm:w-2/3 content-start sm:pr-10">
						<div className="w-full sm:p-4 px-4 bg-cyan-900 rounded opacity-80 text-white">
							<h1 className="title-font font-medium text-xl mb-2 ">{title}</h1>
							<div className="leading-relaxed">
								<h3>{subtitle}</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		) : null}
	</div>
);

export default Banner;
