import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({ image, title, subtitle, home, colorFrom, colorTo }) => (
  <div>
    {home ? (
      <section
        classNameName={`text-gray-600 body-font bg-gradient-to-t ${colorFrom} ${colorTo} `}
      >
        <div classNameName="container h-80 mx-auto flex flex-wrap items-center">
          <h2 classNameName="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">
            {title}
          </h2>
          <div classNameName="md:w-3/5 md:pl-6">
            <p classNameName="leading-relaxed text-gray-400">{subtitle}</p>
            <div classNameName="flex md:mt-4 mt-6">
              <NavLink to="/cursos">
                <button classNameName="inline-flex text-white bg-cyan-700 border-0 py-1 px-4 focus:outline-none hover:bg-cyan-800 rounded">
                  Ver cursos
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className={`text-gray-400 bg-gradient-to-t ${colorFrom} ${colorTo} body-font`}>
        <div className="container  py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-white">
                {title}
              </h1>
              <div className="leading-relaxed">{subtitle}</div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full max-h-80"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      </section>
    )}
  </div>
);

export default Banner;
