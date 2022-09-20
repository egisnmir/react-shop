import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { countReducer2 } from "./countReducer2";

export const rootReducer = combineReducers({
    countReducer,
    countReducer2
});
