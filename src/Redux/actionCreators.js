import  Axios  from "axios";
import {
  GET_ALL_COURSES,
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES,
  GET_ALL_TEACHERS,
  GET_FRAGMENT,
  GET_COURSE,
  GET_POST,
  GET_SPECIALITY,
} from "./actions";
const API_URL = process.env.REACT_APP_URL_API;
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
    console.log(id,dispatch);
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
export const getFragment = (id) => (dispatch) => {
  Axios.get(`${API_URL}/clases/${id}`).then((res) => {
    return dispatch({
      type: GET_FRAGMENT,
      fragment: res.data,
    });
  });
};
