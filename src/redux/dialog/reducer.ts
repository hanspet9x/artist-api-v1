import { IAction } from "../action";
import { HIDE_DIALOG, SHOW_DIALOG } from "./action";
import { IDialogState } from "./IDialog"

const initState = {
    message: "",
    type: "none",
    title: "",
    onConfirmed: () => {}

} as IDialogState;

export const dialogReducer = (state = initState, action: IAction<string, IDialogState>): IDialogState => {
    switch (action.type) {
        case SHOW_DIALOG:
        case HIDE_DIALOG:
          return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}