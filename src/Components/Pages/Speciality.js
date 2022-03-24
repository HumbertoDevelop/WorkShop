/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpeciality, getTeacher } from "../../Redux/actionCreators";
import store from "../../Redux/store";
import Temario from "../Organims/Temary";
const Speciality = ({ speciality, teacher }) => {
	const params = useParams();
	useEffect(() => {
		store.dispatch(getSpeciality(params.id));
		store.dispatch(getTeacher(params.id));
	}, [params.id]);
	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 pt-40 pb-10 mx-auto flex flex-col">
				<div className="lg:w-4/6  mx-auto">
					<div className="rounded-lg h-80 overflow-hidden">
						<iframe
							width="560"
							height="315"
							src={speciality?.picture}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							className="object-cover object-center h-full w-full"
							allowFullScreen></iframe>
					</div>
					<div className="flex flex-col sm:flex-row mt-10">
						<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
								<img src={teacher?.picture} alt={teacher?.name} />
							</div>
							<div className="flex flex-col items-center text-center justify-center">
								<h2 className="font-medium title-font mt-4 text-white text-lg">
									{teacher?.name}
								</h2>
								<div className="w-12 h-1 bg-cyan-600 rounded mt-2 mb-4" />
								<p className="text-base text-gray-400">{teacher?.country}</p>
								<p className="text-base text-gray-400">{teacher?.speciality}</p>
							</div>
						</div>
						<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left  grid justify-space-between">
							<h1 className="font-medium title-font text-white">
								Especialidad: {speciality?.name}
							</h1>
							<p className="leading-relaxed text-lg mb-4">{speciality?.bio}</p>

							<Temario />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
const mapStateToProps = (state) => ({
	speciality: state.specialitiesReducer.speciality,
	teacher: state.teachersReducer.teacher,
});

export default connect(mapStateToProps, {})(Speciality);
