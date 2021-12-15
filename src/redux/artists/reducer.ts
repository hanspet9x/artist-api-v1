import { IArtists } from "../../services/interfaces/artisits";
import { IAction } from "../action";
import { IArtistsState } from "./IArtists";

const initialState = {
    artists: []
} as IArtistsState;

export const artistReducer = (state= initialState, actions: IAction<string, IArtists>): IArtistsState => {
    return Object.assign({}, state, actions.payload)
}