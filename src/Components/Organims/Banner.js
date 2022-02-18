import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

                // <NavLink
                //   to="/cursos"
                //   className="text-indigo-500 inline-flex items-center"
                // >
                //   Ver curso
                //   <svg
                //     className="w-4 h-4 ml-2"
                //     viewBox="0 0 24 24"
                //     stroke="currentColor"
                //     stroke-width="2"
                //     fill="none"
                //     stroke-linecap="round"
                //     stroke-linejoin="round"
                //   >
                //     <path d="M5 12h14"></path>
                //     <path d="M12 5l7 7-7 7"></path>
                //   </svg>
                // </NavLink>
const Banner = ({ image, title, subtitle, home }) => (
  <div>
    {home ? (
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">{title}</h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">{subtitle}</p>
          <div className="flex md:mt-4 mt-6">
           <NavLink to="/cursos">
             <button className="inline-flex text-white bg-cyan-700 border-0 py-1 px-4 focus:outline-none hover:bg-cyan-600 rounded">Ver cursos</button>
             </NavLink> 
            
          </div>
        </div>
      </div>
    </section>
    ) : (
      <section className="text-gray-600 body-font">
        <div className="container  py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              {title} <br />
              {subtitle}
            </h1>
            <div>
              <img src={null} alt={image.alt} />
              <Link to="/cursos">
                <button className="flex-shrink-0 text-white bg-cyan-700 border-0 py-2 px-10 focus:outline-none hover:bg-cyan-600 rounded text-lg mt-10 sm:mt-0">
                  Ver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )}
  </div>
);

export default Banner;
