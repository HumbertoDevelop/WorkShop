/** @format */

import Axios from "axios";
import {
	GET_ALL_COURSES,
	GET_ALL_POSTS,
	GET_ALL_SPECIALITIES,
	GET_ALL_TEACHERS,
	GET_COURSE,
	GET_POST,
	GET_SPECIALITY,
	GET_TEACHER,
	ADD_TO_CART,
	BULK_ADD_TO_CART,
	REMOVE_FROM_CART,
	GET_TEMARY,
} from "./actions";
const API_URL = process.env.REACT_APP_URL_API;

export const addToCart = (id, name, price, category) => (dispatch) => {
	return dispatch({ type: ADD_TO_CART, id, name, price, category });
};

export const removeFromCart = (id, name, price, category) => (dispatch) => {
	return dispatch({ type: REMOVE_FROM_CART, id, name, price, category });
};

export const bulkCart = () => (dispatch) => {
	Axios.get(`${API_URL}/carrito`)
		.then(({ data }) => {
			return dispatch({ type: BULK_ADD_TO_CART, payload: data });
		})
		.catch((e) => console.error(e));
};
export const getallPosts = () => (dispatch) => {
	Axios.get(`${API_URL}/posts`).then((res) => {
		return dispatch({
			type: GET_ALL_POSTS,
			posts: res.data,
		});
	});
};
export const getallSpecialities = () => (dispatch) => {
	Axios.get(`${API_URL}/especialidades`).then((res) => {
		return dispatch({
			type: GET_ALL_SPECIALITIES,
			specialities: res.data,
		});
	});
};
export const getallCourses = () => (dispatch) => {
	Axios.get(`${API_URL}/cursos`).then((res) => {
		return dispatch({
			type: GET_ALL_COURSES,
			courses: res.data,
		});
	});
};
export const getallTeachers = () => (dispatch) => {
	Axios.get(`${API_URL}/profesores`).then((res) => {
		return dispatch({
			type: GET_ALL_TEACHERS,
			teachers: res.data,
		});
	});
};
export const getTeacher = (id) => (dispatch) => {
	Axios.get(`${API_URL}/profesores/${id}`).then((res) => {
		return dispatch({
			type: GET_TEACHER,
			teacher: res.data,
		});
	});
};
export const getPost = (id) => (dispatch) => {
	Axios.get(`${API_URL}/post/${id}`).then((res) => {
		return dispatch({
			type: GET_POST,
			post: res.data,
		});
	});
};
export const getSpeciality = (id) => (dispatch) => {
	Axios.get(`${API_URL}/especialidades/${id}`).then((res) => {
		return dispatch({
			type: GET_SPECIALITY,
			speciality: res.data,
		});
	});
};
export const getCourse = (id) => (dispatch) => {
	Axios.get(`${API_URL}/cursos/${id}`).then((res) => {
		return dispatch({
			type: GET_COURSE,
			course: res.data,
		});
	});
};
export const getTemary = () => (dispatch) => {
	Axios.get(`${API_URL}/temario`).then((res) => {
		return dispatch({
			type: GET_TEMARY,
			temary: res.data,
		});
	});
};
