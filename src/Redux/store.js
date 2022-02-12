import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  fragmentReducer,
  coursesReducer,
  postsReducer,
  speaclitiesReducer,
  teachersReducer,
} from "./reducers";

export default createStore(
  combineReducers({
    speaclitiesReducer,
    fragmentReducer,
    teachersReducer,
    postsReducer,
    coursesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
