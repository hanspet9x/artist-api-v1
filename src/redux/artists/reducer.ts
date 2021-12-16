import { IArtist } from "../../services/interfaces/artisits";
import { IAction } from "../action";
import { ARTIST_ACTION, SELECTED_ARTIST_ACTION } from "./action";
import { IArtistsState } from "./IArtists";

const initialState = {
    data: [],
    selected: {} as IArtist
} as IArtistsState;

export const artistReducer = (state = initialState, actions: IAction<string, IArtist>): IArtistsState => {
    switch (actions.type) {
        case ARTIST_ACTION:
            return Object.assign({}, state, { data: actions.payload });
        case SELECTED_ARTIST_ACTION:
            return Object.assign({}, state, { selected: actions.payload });
        default:
            return state;
    }
}