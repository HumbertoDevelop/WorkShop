import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, BULK_ADD_TO_CART, REMOVE_FROM_CART } from '../../Redux/actions';
import Axios from "axios";
import axios from 'axios';

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
  const dispatch = useDispatch();

  const updateCart = () => {
    axios.get(`${process.env.REACT_APP_URL_API}/carrito`)
        .then(({ data }) => {
          dispatch({ type: BULK_ADD_TO_CART, payload: data });
        })
        .catch((e) => console.error(e));
  };

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, id: cardId, name, price, category });
    Axios.post(`${process.env.REACT_APP_URL_API}/carrito`, {
        id: cardId,
        name,
        price,
        category,
      })
        .then(() => updateCart())
        .catch((e) => console.error(e));
    };

  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, id: cardId, name });
    Axios.delete(`${process.env.REACT_APP_URL_API}/carrito/${cardId}`)
      .then((res) => updateCart())
      .catch((e) => console.error(e))
  };
  const isProductInCart = cart.some(product => product.id === cardId);

  return (
    <>
      <div className={`xl:w-1/3 md:w-1/2 p-4 ${isProductInCart ? 'grayscale' : ''}`}>
        <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
          <Link to={`/${path}/${cardId}`}>
            <img src={picture} alt={name} />
          </Link>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            {name}
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <div>
            <div className="my-2 flex items-center justify-around">
              <img
                  src={pictureTeacher}
                  className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  alt={teacher}
              />
              <p>{teacher}</p>

              <p className="mt-1 line-through">{price}$</p>
            </div>
            <div className="grid grid-cols-2 gap-y-1 gap-x-5 text-sm pt-2">
              <button
                  onClick={isProductInCart ? removeFromCart : addToCart}
                  className="rounded-full bg-cyan-800  p-2 w-max text-white"
              >
                {isProductInCart ? 'Quitar del carrito' : 'Agregar al carrito'}
              </button>
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
