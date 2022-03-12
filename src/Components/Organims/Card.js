import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../Redux/actions";
import Axios from "axios";

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
  const [cart2, setCart2] = useState(false);
  const [buy, setBuy] = useState(false);

  const itemBuy = () => {
    setBuy(!buy);
  };
  const auth = () => {
    Axios.get(`${process.env.REACT_APP_URL_API}/carrito`)
      .then((r) => {
        let idFoundArr = r.data;
        idFoundArr.map((ar) => {
          for (const key in ar) {
            if (ar.hasOwnProperty.call(ar, key)) {
              const element = ar[key];
              if (key === "cardId" && element === cardId) {
                return  false;
              } else {
                return  true;
              }
            }
          }
        });
      })
      .catch((e) => console.error(e));
  };

  const addtoCart = () => {
    dispatch({ type: ADD_TO_CART, id: cardId, name, price, category });
    Axios.post(`${process.env.REACT_APP_URL_API}/carrito`, {
        id: cardId,
        name,
        price,
        category,
      }).catch((e) => console.error(e));
      setCart2(!cart2);
    };
    
  const removefromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, id: cardId, name });
    Axios.delete(`${process.env.REACT_APP_URL_API}/carrito/${cardId}`)
      .then((res) => {})
      .catch((e) => console.error(e));
    setCart2(!cart2);
  };

  return (
    <>
      { cart2 ? (
       <div className="xl:w-1/3 md:w-1/2 p-4 grayscale">
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
               onClick={() => removefromCart()}
               className="rounded-full bg-cyan-800  p-2 w-max text-white"
             >
               Quitar del carrito
             </button>
           </div>
         </div>
       </div>
     </div>
      ) : (
        <div className="xl:w-1/3 md:w-1/2 p-4 ">
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

                <p className="mt-1">{price}$</p>
              </div>
              <div className="grid grid-cols-2 gap-y-1 gap-x-5 text-sm pt-2">
                <button
                  onClick={() => addtoCart()}
                  className="rounded-full bg-cyan-800  p-2 w-max text-white"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.coursesCart,
});

export default connect(mapStateToProps, {})(Card);
