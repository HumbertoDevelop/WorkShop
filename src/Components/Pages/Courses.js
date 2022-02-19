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
        colorFrom='from-violet-900'
        colorTo="to-gray-900"
        image={{
          src: "https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          alt: "Banner Cursos",
        }}
        title="Nuestros Cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar el Ingles"
      />
      {courses && (
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {courses.map((c) => (
                <Card
                  key={c.id}
                  picture={c.picture}
                  name={c.name}
                  path="cursos"
                  cardId={c.id}
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
