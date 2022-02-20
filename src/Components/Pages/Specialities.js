import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallSpecialities } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Card from "../Organims/Card";

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getallSpecialities());
  },[]);
  return (
    <div >
      <Banner
      colorFrom='from-red-900'
      colorTo="to-gray-900"
        image={{
          src: "https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "Banner Especialidades",
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
        specialities
      />
      {
      specialities && (
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-20 mx-auto">
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialitiesReducer.specialities,
});
export default connect(mapStateToProps, {})(Specialities);
