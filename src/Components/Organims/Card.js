import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  bulkCart,
  removeFromCart,
} from "../../Redux/actionCreators";
import axios from "axios";

const Card = ({
  picture,
  name,
  cardId,
  path,
  cart,
  price,
  teacher,
  pictureTeacher,
  category,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = () => {
    dispatch(bulkCart());
  };

  const addtoCart = async () => {
    setLoading(true);
    dispatch(addToCart(cardId, name, price, category));
    await axios.post(`${process.env.REACT_APP_URL_API}/carrito`, {
      id: cardId,
      name,
      price,
      category,
    })
      .then(() => {
        updateCart();
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  const removefromCart = async () => {
    setLoading(true);
    dispatch(removeFromCart(cardId, name, price, category));
    await axios.delete(`${process.env.REACT_APP_URL_API}/carrito/${cardId}`)
      .then(() => updateCart())
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };
  const isProductInCart = cart.some(
    (product) =>
      product.id === cardId &&
      product.name === name &&
      product.price === price &&
      product.category === category
  );

  return (
    <>
      <div
        className="xl:w-1/3 md:w-1/2 p-4"
      >
        <div className="bg-cyan-800 bg-opacity-40 p-4 rounded-lg">
          <Link to={`/${path}/${cardId}`}>
            <img src={picture} alt={name}/>
          </Link>
          <div className="flex justify-between">
            <Link to={`/${path}/${cardId}`}>
              <h2 className="text-lg text-white font-medium text-3xl title-font mb-4 pt-4">
                {name}
              </h2>
            </Link>
            <div className="flex align-center my-4">
              <button
                  disabled={loading}
                  onClick={isProductInCart ? removefromCart : addtoCart}
                  className="rounded-full hover:bg-cyan-800  p-2 w-max hover:text-white bg-yellow-500 text-slate-900 font-bold px-4"
              >
                {isProductInCart ? 'Quitar del carrito' : 'Agregar al carrito'}
                {loading ? '(Loading...)' : null}
              </button>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <div>
            <div className="my-2 flex items-center justify-between">
              <div className="flex items-center">
                <img
                    src={pictureTeacher}


                    className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    alt={teacher}
                />
                <p className="text-lg">{teacher}</p>
              </div>

              <p className={`mt-1 ${isProductInCart ? "line-through" : ""} text-2xl text-yellow-500`}>
                {price}$
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.coursesCart,
});

export default connect(mapStateToProps, {})(Card);

