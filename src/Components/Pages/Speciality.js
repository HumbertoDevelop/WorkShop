import React from "react";
import Banner from "../Organims/Banner";

const Speciality = () => {
  return (
    <div className="ed-grid">
      <Banner
        color="first-color"
        image={{
          src: "https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb",
          alt: "Banner Especialidad",
        }}
        title="Especialidad"
        subtitle="Dominala Ya!"
      />
    </div>
  );
};

export default Speciality;
