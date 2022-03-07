import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallTeachers } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Teacher from "../Organims/Teacher";

const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getallTeachers());
  }, [match]);
  return (
    <>
      <Banner
        colorFrom="from-cyan-800"
        colorTo="to-gray-900"
        image={{
          src: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "Banner profesor",
        }}
        teachers
        title="Nuestros Profesores"
        subtitle="Este plantel docente esta altamente calificado para guiarte en tu educación"
      />
      {teachers && (
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4 mx-auto justify-center">
              {teachers.map((t) => (
                <Teacher
                  key={t.id}
                  picture={t.picture}
                  name={t.name}
                  country={t.country}
                  speciality={t.speciality}
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
  teachers: state.teachersReducer.teachers,
});

export default connect(mapStateToProps, {})(Teachers);
