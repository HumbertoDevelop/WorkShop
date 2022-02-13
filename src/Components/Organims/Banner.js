import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ color, image, title, subtitle, home }) => (
  <div className={`main-banner img-container s-mb-4 ${color}`} id="main-banner">
    <div className="ed-grid lg-grid-6 ">
      <div className={`lg-cols-4 lg-x-2 ${color}`}>
        <img className="main-banner__img" src={null} alt={image.alt} />
        {home ? (
          <div className="ed-grid m-grid-2">
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">{title}</p>
              <p>{subtitle}</p>
              <Link to="/cursos" className="button accent-color">Ver Curso</Link>
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
      </div>
    </div>
  </div>
);

export default Banner;
