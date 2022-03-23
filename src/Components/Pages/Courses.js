import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallCourses } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Banner from "../Organims/Banner";
import Card from "../Organims/Card";

const Courses = ({ courses }) => {
  console.log(courses);
  useEffect(() => {
    store.dispatch(getallCourses());
  }, []);
  return (
    <>
      <Banner
        title="Nuestros Cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar el Ingles"
        courses
      />
      {courses && (
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap m-4">
              {courses.map((c) => (
                <Card
                  key={c.id}
                  picture={c.picture}
                  category={c.category}
                  name={c.name}
                  price={c.price}
                  path="cursos"
                  cardId={c.id}
                  teacher={c.teacher}
                  pictureTeacher={c.pictureTeacher}
                  bio={c.bio}
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
  courses: state.coursesReducer.courses,
});

export default connect(mapStateToProps, {})(Courses);
