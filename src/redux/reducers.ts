import { combineReducers } from "redux";
import { artistReducer } from "./artists/reducer";
import { dialogReducer } from "./dialog/reducer";

export const reducers = combineReducers({
    artists: artistReducer,
    dialog: dialogReducer
});