import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  fragmentReducer,
  coursesReducer,
  postsReducer,
  specialitiesReducer,
  teachersReducer,
} from "./reducers";

export default createStore(
  combineReducers({
    specialitiesReducer,
    fragmentReducer,
    teachersReducer,
    postsReducer,
    coursesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
