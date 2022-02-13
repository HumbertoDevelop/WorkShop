import React from "react";

const Teacher = ({ picture, name, country }) => {
  return (
    <article>
      <div className="s-px-4">
        <div className="img-container circle s-mb-2">
          <img src={picture} alt={name} />
        </div>
      </div>
      <div className="s-center">
        <h3 className="s-mb-1">{name}</h3>
        <h5>{country}</h5>
      </div>
    </article>
  );
};

export default Teacher;
