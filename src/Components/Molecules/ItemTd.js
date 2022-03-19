import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bulkCart, removeFromCart } from "../../Redux/actionCreators";
import DeleteBtn from "./DeleteBtn";

const ItemTd = ({ id, name, category, price }) => {
  const dispatch = useDispatch();
    const updateCart = () => {
        return new Promise(() => {
            setTimeout(() => {
                dispatch(bulkCart());
            }, 0);
        });
    };


    useEffect(() => {
    updateCart();
  }, [updateCart]);

  const removefromCart = async () => {
    dispatch(removeFromCart(id, name, price, category));
    await axios.delete(`${process.env.REACT_APP_URL_API}/carrito/${id}`)
      .then(() => updateCart())
      .catch((e) => console.error(e));
  };

  return (
    <tr className="text-slate-900 font-semibold">
      <td className="px-4  py-3 text-center">{id}</td>
      <td className="px-4 py-3">{name}</td>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">${price}</td>
      <td className="px-4 py-3" onClick={removefromCart}>
        <DeleteBtn />
      </td>
    </tr>
  );
};

export default ItemTd;
