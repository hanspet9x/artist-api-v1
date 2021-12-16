import { IArtist } from "../../services/interfaces/artisits";

export interface IArtistsState {
    data: IArtist[];
    selected: IArtist;
}