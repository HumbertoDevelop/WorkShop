import React from "react";
import { Link } from "react-router-dom";

const Teacher = ({ picture, name, country, speciality }) => {
  return (
    <div className="p-2 lg:w-1/2 md:w-max">
      <div className="flex border-2 rounded-lg border-gray-700 p-2 sm:flex-row  justify-between ">
        <div className="pt-2 ">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
            <Link to="/">
              <img src={picture} alt={name} />
            </Link>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">
              {name}
            </h2>
            <p className="leading-relaxed text-base">{country}</p>
          </div>
        </div>
        <div className="grid w-2/3 content-between">
          <p>
            Profesor, docente o enseñante es quien se dedica profesionalmente a
            la enseñanza, ya sea con carácter general o especializado en una
            determinada área de conocimiento, asignatura, disciplina académica,
            ciencia o arte.
          </p>
          <div className="border-t border-cyan-400">
            
          <h2>Especialidad</h2>
          <p>{speciality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
