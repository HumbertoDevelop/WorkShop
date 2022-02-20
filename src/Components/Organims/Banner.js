import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Banner = ({ image, title, subtitle, home, colorFrom, colorTo, specialities,courses,teachers }) => (
  <div >
    {home ? (
      <section
        className={`body-font bg-gradient-to-t ${colorFrom} ${colorTo} bg-[url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center h-96 grid container-center`}
      >
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <h2 className="sm:text-3xl text-2xl font-medium  title-font mb-2 md:w-2/5">
            {title}
          </h2>
          <div className="md:w-1/3 ">
            <p className="leading-relaxed ">{subtitle}</p>
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
      <section className={` bg-gradient-to-t ${colorFrom} ${colorTo} body-font bg-[url('https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-20 `}>
        <div className="container   mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-white">
                {title}
              </h1>
              <div className="leading-relaxed">{subtitle}</div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Link to="/cursos">
            <img
              className="object-cover object-center w-full max-h-80"
              src={image.src}
              alt={image.alt}
              />
              </Link>
          </div>
        </div>
      </section>
    ) : courses ? (
      <section className={` bg-gradient-to-t ${colorFrom} ${colorTo} body-font bg-[url('https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-20 max-h`}>
        <div className="container   mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-white">
                {title}
              </h1>
              <div className="leading-relaxed">{subtitle}</div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Link to="/cursos">
            <img
              className="object-cover object-center w-full max-h-80"
              src={image.src}
              alt={image.alt}
              />
              </Link>
          </div>
        </div>
      </section>
    ) : teachers ? (
      <section className={` bg-gradient-to-t ${colorFrom} ${colorTo} body-font bg-[url('https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center py-20 `}>
        <div className="container   mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-white">
                {title}
              </h1>
              <div className="leading-relaxed">{subtitle}</div>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Link to="/cursos">
            <img
              className="object-cover object-center w-full max-h-80"
              src={image.src}
              alt={image.alt}
              />
              </Link>
          </div>
        </div>
      </section>
    ) : null}
  </div>
);

export default Banner;
