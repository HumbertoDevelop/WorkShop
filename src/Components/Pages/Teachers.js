import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallTeachers } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Teacher from "../Organims/Teacher";

const Teachers = ({ match, teachers }) => {
  console.log(teachers);
  useEffect(() => {
    store.dispatch(getallTeachers());
  }, [match]);
  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb",
          alt: "Banner profesor",
        }}
        title="Nuestros Profesores"
        subtitle="Este plantel docente esta altamente calificado para guiarte en tu educación"
      />
      {teachers && (
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {teachers.map((t) => (
            <Teacher
              key={t.id}
              picture={t.picture}
              name={t.name}
              country={t.country}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  teachers: state.teachersReducer.teachers,
});

export default connect(mapStateToProps, {})(Teachers);
