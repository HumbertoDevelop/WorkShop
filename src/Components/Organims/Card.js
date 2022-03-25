/** @format */

import React, { useCallback, useEffect, useState } from "react";
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
	bio,
}) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const updateCart = useCallback(() => {
		dispatch(bulkCart());
	}, [dispatch]);
	useEffect(() => {
		updateCart();
	}, [updateCart]);

	const addtoCart = async () => {
		setLoading(true);
		dispatch(addToCart(cardId, name, price, category));
		await axios
			.post(`${process.env.REACT_APP_URL_API}/carrito`, {
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
		await axios
			.delete(`${process.env.REACT_APP_URL_API}/carrito/${cardId}`)
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
			<div className="xl:w-1/3 md:w-1/2 p-4">
				<div className="bg-cyan-800 bg-opacity-40 p-4 rounded-lg">
					<iframe
						width="560"
						height="315"
						src={picture}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						className="object-cover object-center h-full w-full"
						allowFullScreen></iframe>

					<div className="flex justify-between items-center">
						<Link to={`/${path}/${cardId}`}>
							<h2 className="md:text-lg smx2:text-sm  text-white font-medium text-3xl title-font mb-4 pt-4 overflow-y-hidden">
								{name}
							</h2>
						</Link>
						<div className="flex align-center my-4">
							<button
								disabled={loading}
								onClick={isProductInCart ? removefromCart : addtoCart}
								className="rounded-full hover:bg-cyan-800 smx2:p-1 md:text-lg  smx2:text-sm p-2 w-max hover:text-white bg-yellow-500 text-slate-900 font-bold px-4">
								{isProductInCart ? "Quitar del carrito" : "Agregar al carrito"}
								{loading ? "(Loading...)" : null}
							</button>
						</div>
					</div>
					<p className="leading-relaxed text-base">{bio}</p>
					<div>
						<div className="smx2:grid smx1:flex my-2 flex items-center justify-between">
							<div className="flex items-center">
								<img
									src={pictureTeacher}
									className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
									alt={teacher}
								/>
								<p className="text-lg">{teacher}</p>
							</div>

							<p
								className={`mt-1 ${
									isProductInCart ? "line-through" : ""
								} text-2xl text-yellow-500`}>
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
