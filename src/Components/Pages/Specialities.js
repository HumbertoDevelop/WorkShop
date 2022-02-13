import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallSpecialities } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Card from "../Organims/Card";

const Specialities = ({ specialities }) => {
  useEffect(() => {
    store.dispatch(getallSpecialities());
  }, []);
  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb",
          alt: "Banner Especialidades",
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
      />
      {specialities && (
        <main className="ed-grid m-grid-3">
          {specialities.map((s) => (
            <Card key={s.id} picture={s.picture} name={s.name} cardId={s.id} path='especialidades' />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  specialities: state.specialitiesReducer.specialities,
});
export default connect(mapStateToProps, {})(Specialities);
