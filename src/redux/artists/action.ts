import { IArtist } from "../../services/interfaces/artisits";
import { IAction } from "../action";

export const ARTIST_ACTION = "artists_action";
export const SELECTED_ARTIST_ACTION = "selected_artists_action";
export default class ArtistAction {

    static setArtists(data: IArtist[]): IAction<string, IArtist[]> {
        return {type: ARTIST_ACTION, payload: data}
    }

    static selectArtist(data: IArtist): IAction<string, IArtist> {
        return {type: SELECTED_ARTIST_ACTION, payload: data}
    }
}