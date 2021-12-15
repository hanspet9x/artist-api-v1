import { IDialogState } from "./dialog/IDialog";
import { IArtistsState } from './artists/IArtists';

export interface IRootState {
    artists: IArtistsState;
    dialog: IDialogState;
}