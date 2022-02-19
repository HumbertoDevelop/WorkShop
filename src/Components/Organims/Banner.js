import React from "react";
import { NavLink } from "react-router-dom";

const Banner = ({ image, title, subtitle, home, colorFrom, colorTo }) => (
  <div>
    {home ? (
      <section
        className={`text-gray-600 body-font bg-gradient-to-t ${colorFrom} ${colorTo} `}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">
            {title}
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-gray-400">{subtitle}</p>
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
    ) : (
      <section className={`text-gray-600 bg-gradient-to-t ${colorFrom} ${colorTo}`}>
        <div className="container mx-auto">
          <div className=" flex flex-col sm:flex-row sm:items-center py-2">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
              {title} <br />
              {subtitle}
            </h1>

            <img src={image.src} alt={image.alt} className="max-h-72" />
          </div>
        </div>
      </section>
    )}
  </div>
);

export default Banner;
