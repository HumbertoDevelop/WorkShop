import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_COURSE, GET_FRAGMENT, GET_POST, GET_SPECIALITY } from "./actions";

const postsReducer = (state = {}, action) => {
  if (action.type === GET_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts,
    };
  }

  if (action.type === GET_POST) {
    return {
      ...state,
      post: action.post,
    };
  }
  return state;
};

const speaclitiesReducer = (state = {}, action) => {
    if (action.type === GET_ALL_SPECIALITIES) {
        return {
          ...state,
          specialities: action.specialities,
        };
      }
    
      if (action.type === GET_SPECIALITY) {
        return {
          ...state,
          speciality: action.speciality,
        };
      }
  return state;
};
const coursesReducer = (state = {}, action) => {
    if (action.type === GET_ALL_COURSES) {
        return {
          ...state,
          courses: action.courses,
        };
      }
    
      if (action.type === GET_COURSE) {
        return {
          ...state,
          course: action.course,
        };
      }
  return state;
};
const teachersReducer = (state = {}, action) => {
    if (action.type === GET_ALL_TEACHERS) {
        return {
          ...state,
          teachers: action.teachers,
        };
      }
    
      
  return state;
};
const fragmentReducer = (state = {}, action) => {
    if (action.type === GET_FRAGMENT) {
        return {
          ...state,
          fragment: action.fragment,
        };
      }
  return state;
};

export {
  fragmentReducer,
  postsReducer,
  speaclitiesReducer,
  coursesReducer,
  teachersReducer,
};
