import React from "react";

const ItemTd = ({ name, category, price, id }) => {
  return (
    <tr>
      <td className="px-4 py-3 text-center">{id}</td>
      <td className="px-4 py-3">{name}</td>
      <td className="px-4 py-3">{category}</td>
      <td className="px-4 py-3">${price}</td>
    </tr>
  );
};

export default ItemTd;
