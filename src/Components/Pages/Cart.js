/** @format */

import React, { useMemo } from "react";
import { connect } from "react-redux";
import ItemTd from "../Molecules/ItemTd";

const Cart = ({ items }) => {
	const totalPrice = useMemo(
		() => items.reduce((total, item) => item.price + total, 0),
		[items]
	);

	let bought = (total) => {
		if (total > 0) {
			total = 0;
			alert("Compra Exitosa!");
			return;
		} else {
			alert("Elige un curso antes!");
		}
	};
	return (
		<section className=" body-font min-h-screen flex items-center className={`  body-font bg-[url('https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')] bg-no-repeat bg-cover bg-center`}">
			<div className="container mx-auto ">
				<div className="flex flex-col  text-center w-full">
					<h1 className="text-white sm:text-4xl text-3xl font-medium title-font mb-2 ">
						Carrito
					</h1>
				</div>
				<div className="lg:w-2/3 w-full mx-auto overflow-auto">
					<table className="table-auto w-full text-center whitespace-no-wrap  bg-yellow-500 h-20">
						<thead>
							<tr>
								<th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-cyan-800  text-center">
									#Cod
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
								<th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-cyan-800 ">
									🗑
								</th>
							</tr>
						</thead>
						{items && (
							<tbody>
								{items.map(({ id, name, category, price }) => (
									<ItemTd
										key={id}
										id={id}
										name={name}
										category={category}
										price={price}
									/>
								))}
							</tbody>
						)}
					</table>
				</div>
				<div className="flex justify-between pl-4 lg:w-2/3 w-full mx-auto bg-cyan-800 p-2">
					<button
						onClick={() => bought(totalPrice)}
						className=" text-slate-900 font-semibold bg-yellow-500 border-0 py-1 px-4  focus:outline-none hover:bg-yellow-600 hover:text-white rounded">
						Buy
					</button>
					<div className="flex items-center text-white">
						<p>Total: ${totalPrice}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	items: state.cartReducer.coursesCart,
});

export default connect(mapStateToProps, {})(Cart);
