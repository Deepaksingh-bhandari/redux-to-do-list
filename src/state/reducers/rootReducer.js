import todoReducer from "./index";
import { combineReducers } from "redux";

export const rootReducer=combineReducers({
    todos:todoReducer
})