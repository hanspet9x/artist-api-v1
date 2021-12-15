import { IArtists } from "../../services/interfaces/artisits";
import { IAction } from "../action";

export default class ArtistAction {

    static setArtists(data: IArtists[]): IAction<string, IArtists[]> {
        return {type: "artists", payload: data}
    }
}