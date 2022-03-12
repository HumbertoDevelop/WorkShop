import React from "react";
import { connect } from "react-redux";
import ItemTd from "../Molecules/ItemTd";

const Cart = ({ items, total }) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto min-h-screen">
        <div className="flex flex-col text-center w-full mb-10 ">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Carrito
          </h1>
        </div>
        <div className="lg:w-2/3  w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap ">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-cyan-800 rounded-tl rounded-bl text-center">
                  Id curso/especialidad
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-cyan-800">
                  Nombre
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-cyan-800">
                  Categoria
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-cyan-800">
                  Precio
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-cyan-800 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            {items && (
              <tbody>
                {items.map((i) => (
                  <ItemTd
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    category={i.category}
                    price={i.price}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <div className="flex justify-between  pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button
            onClick={() => alert(`!Compra Exitpsa!`)}
            className=" text-stale font-semibold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-800 hover:text-white rounded"
          >
            Buy
          </button>
          <div className="flex items-center ">
            <p>Total: ${total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  items: state.cartReducer.coursesCart,
  total: state.cartReducer.totalPrice,
});

export default connect(mapStateToProps, {})(Cart);
