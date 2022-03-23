import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  coursesReducer,
  postsReducer,
  specialitiesReducer,
  teachersReducer,
  cartReducer,
  temaryReducer,
} from "./reducers";

export default createStore(
  combineReducers({
    specialitiesReducer,
    temaryReducer,
    teachersReducer,
    postsReducer,
    coursesReducer,
    cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
