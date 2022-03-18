import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({
  title,
  subtitle,
  home,
  specialities,
  courses,
  teachers,
  cart,
  image
}) => (
  <div>
    {home ? (
      <section>
        <div
          className={`body-font  bg-[url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center bg-fixed h-96  blur-sm `}
        ></div>
        <div className="container mx-auto flex flex-wrap items-center  justify-between absolute top-1/4 left-0 right-0 pl-4">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5 ">
            {title}
          </h2>
          <div className="md:w-1/3 ">
            <div className="leading-relaxed ">
              <h3>{subtitle}</h3>
            </div>
            <div className="flex md:mt-4 mt-6">
              <NavLink to="/cursos">
                <button className="inline-flex text-white bg-cyan-700 border-0 py-1 px-4 focus:outline-none hover:bg-cyan-800 rounded">
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
          className={`  body-font bg-[url('https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}
        ></div>
        <div className="container   mx-auto flex flex-wrap justify-center  absolute top-1/4 left-0 right-0">
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
          className={`  body-font bg-[url('https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}
        ></div>
        <div className="container   mx-auto flex flex-wrap justify-center  absolute top-1/4 left-0 right-0">
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
          className={`  body-font bg-[url('https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-10 bg-fixed h-96 grid items-center blur-sm`}
        ></div>
        <div className="container   mx-auto flex flex-wrap justify-center  absolute top-1/4 left-0 right-0">
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
