import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getallPosts } from "../../Redux/actionCreators";
import store from "../../Redux/store";

import Banner from "../Organims/Banner";
import Publication from "../Organims/Publication";
const Home = ({ posts }) => {
  useEffect(() => {
    store.dispatch(getallPosts());
  }, []);
  return (
    <>
      <Banner
        title="Bienvenido a tu lugar ideal para comenzar a hablar ingles!"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti"
        home
      />
      <main className="bg-gray-900 text-gray-400 body-font ">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            <div>
              {posts ? (
                <div className="py-8 px-4">
                  <h2 className="text-cyan-300 text-lg">
                    Ultimas publicaciones
                  </h2>
                  {posts.map((p) => (
                    <Publication
                      title={p.title}
                      author={p.author}
                      fecha={p.fecha}
                      fechaM={p.fechaM}
                      content={p.content}
                      key={p.id}
                    />
                  ))}
                </div>
              ) : (
                <p>No existen publicacíones en la base de datos</p>
              )}
            </div>
          </div>
          <div className=""></div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});
export default connect(mapStateToProps, {})(Home);
