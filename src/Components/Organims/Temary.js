/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../Redux/store";
import { getTemary } from "../../Redux/actionCreators";
import Tem from "../Molecules/Tem";
const Temario = ({ temary }) => {
	console.log(temary);

	useEffect(() => {
		store.dispatch(getTemary());
	}, []);
	return (
		<section className="text-gray-400 bg-gray-900 body-font grid justify-center">
			<div className="container px-5 pb-5 mx-auto flex-wrap">
				<h2 className="text-3xl text-center pb-2">Temario: </h2>
				<div className=" w-full">
					<div className="w-full md:pr-10 md:py-6">
						{temary && (
							<div className="flex-grow flex-wrap">
								<div>
									{temary.map((t) => (
										<Tem key={t.id} title={t.title} obj={t.objectives} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	temary: state.temaryReducer.temary,
});

export default connect(mapStateToProps, {})(Temario);
