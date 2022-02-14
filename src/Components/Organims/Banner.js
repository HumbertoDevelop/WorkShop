import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ image, title, subtitle, home }) => (
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
          Slow-carb next level shoindxgoitch ethical authentic, scenester
          sriracha forage.
        </h1>
        <div>
          <img className="main-banner__img" src={null} alt={image.alt} />
          {home ? (
            <div className="ed-grid m-grid-2">
              <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">{title}</p>
                <p>{subtitle}</p>
                <Link to="/cursos" className="button accent-color">
                  Ver Curso
                </Link>
              </div>
              <div className="img-container s-ratio-16-9">
                <img src="" alt="Curso Actual" />
              </div>
            </div>
          ) : (
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">{title}</p>
              <p>{subtitle}</p>
              <Link to="/cursos" className="button third-color ">
                Ver Cursos
              </Link>
            </div>
          )}

          <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
            Button
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
