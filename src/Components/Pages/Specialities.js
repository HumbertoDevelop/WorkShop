import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getallSpecialities } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Card from "../Organims/Card";

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getallSpecialities());
  }, []);
  console.log(specialities);
  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "Banner Especialidades",
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
      />
      {
      specialities && (
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {specialities.map((s) => (
                <Card
                  key={s.id}
                  picture={s.picture}
                  name={s.name}
                  cardId={s.id}
                  path="especialidades"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialitiesReducer.specialities,
});
export default connect(mapStateToProps, {})(Specialities);
