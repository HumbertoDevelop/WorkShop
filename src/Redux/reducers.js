import {
  ADD_TO_CART,
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
} from "./actions";

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

const specialitiesReducer = (state = {}, action) => {
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

const initialStateCart = {
  coursesCart: [],
  totalPrice: 0,
};

const cartReducer = (state = initialStateCart, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      course: state.coursesCart.push({
        id: action.id,
        name: action.name,
        category: action.category,
        price: action.price,
      }),
    };
  }
  if (action.type === REMOVE_FROM_CART) {
    let idPos = state.coursesCart.indexOf(action.id);
    return {
      ...state,
      course: state.coursesCart.splice(idPos, 1),
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
  if (action.type === GET_TEACHER) {
    return {
      ...state,
      teacher: action.teacher,
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
  specialitiesReducer,
  coursesReducer,
  cartReducer,
  teachersReducer,
};
