import { IArtists } from "../services/interfaces/artisits";

export interface IReducerActions {
    type: string;
    payload: IArtists[];
}