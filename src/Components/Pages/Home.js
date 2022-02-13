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
        color="dark-color"
        image={{
          src: "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832__340.jpg",
          alt: "Banner Home",
        }}
        title="Bienvenido a tu lugar ideal para comenzar a hablar ingles!"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti"
        home
      />
      <main className="ed-grid m-grid-2">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          <div>
            {posts ? (
              <div>
                {posts.map((p) => (
                  <Publication
                    title={p.title}
                    author={p.author}
                    fecha={p.fecha}
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
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});
export default connect(mapStateToProps, {})(Home);
