import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallCourses } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Card from "../Organims/Card";

const Courses = ({ courses }) => {
  useEffect(() => {
    store.dispatch(getallCourses());
  }, []);
  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb",
          alt: "Banner Cursos",
        }}
        title="Nuestros Cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar el Ingles"
      />
      {courses && (
        <main className="ed-grid m-grid-5">
          {courses.map((c) => (
            <Card
              key={c.id}
              picture={c.picture}
              name={c.name}
              path="cursos"
              cardId={c.id}
            />
          ))}
        </main>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  courses: state.coursesReducer.courses,
});

export default connect(mapStateToProps, {})(Courses);
