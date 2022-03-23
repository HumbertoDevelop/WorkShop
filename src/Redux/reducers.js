/** @format */

import {
	ADD_TO_CART,
	BULK_ADD_TO_CART,
	REMOVE_FROM_CART,
	GET_ALL_COURSES,
	GET_ALL_POSTS,
	GET_ALL_SPECIALITIES,
	GET_ALL_TEACHERS,
	GET_COURSE,
	GET_FRAGMENT,
	GET_POST,
	GET_SPECIALITY,
	GET_TEACHER,
	GET_TEMARY,
} from "./actions";

const postsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			return {
				...state,
				posts: action.posts,
			};

		case GET_POST:
			return {
				...state,
				post: action.post,
			};

		default:
			return state;
	}
};

const temaryReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_TEMARY:
			return {
				...state,
				temary: action.temary,
			};

		default:
			return state;
	}
};

const specialitiesReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPECIALITIES:
			return {
				...state,
				specialities: action.specialities,
			};

		case GET_SPECIALITY:
			return {
				...state,
				speciality: action.speciality,
			};

		default:
			return state;
	}
};

const initialStateCart = {
	coursesCart: [],
};

const cartReducer = (state = initialStateCart, action) => {
	switch (action.type) {
		case BULK_ADD_TO_CART:
			return {
				...state,
				coursesCart: action.payload,
			};

		case ADD_TO_CART:
			return {
				...state,
				course: state.coursesCart.push({
					id: action.id,
					name: action.name,
					price: action.price,
					category: action.category,
				}),
			};

		case REMOVE_FROM_CART:
			let idPos = state.coursesCart.indexOf(action.id);
			return {
				...state,
				course: state.coursesCart.splice(idPos, 1),
			};
		default:
			return state;
	}
};

const coursesReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_COURSES:
			return {
				...state,
				courses: action.courses,
			};

		case GET_COURSE:
			return {
				...state,
				course: action.course,
			};

		default:
			return state;
	}
};

const teachersReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_TEACHERS:
			return {
				...state,
				teachers: action.teachers,
			};

		case GET_TEACHER:
			return {
				...state,
				teacher: action.teacher,
			};

		default:
			return state;
	}
};

export {
	postsReducer,
	specialitiesReducer,
	coursesReducer,
	cartReducer,
	teachersReducer,
	temaryReducer,
};
