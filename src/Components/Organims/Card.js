import React from "react";
import { Link } from "react-router-dom";

const Card = ({ picture, name, cardId, path }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 ">
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        <Link to={`/${path}/${cardId}`}>
          <img src={picture} alt={name} />
        </Link>
        <h2 className="text-lg text-white font-medium title-font mb-4">
          {name}
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
        <div className="grid grid-cols-2 gap-y-1 gap-x-5 text-sm pt-2">
          <button className="rounded-full bg-cyan-800 text-white">
            <a onClick={() => window.alert("Curso comprado con exito")}>
              {" "}
              Comprar{" "}
            </a>
          </button>
          <button className="rounded-full bg-cyan-800   text-white">
            <a
              onClick={() =>
                window.alert("Curso agregado al carrito con exito")
              }
            >
              {" "}
              Reservar{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
