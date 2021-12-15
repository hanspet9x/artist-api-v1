import { IAction } from "../action";
import { IDialogState, TDialogType } from "./IDialog"

const initState = {
    message: "",
    type: "none",
    title: "",
    onConfirmed: () => {}

} as IDialogState;

export const dialogReducer = (state = initState, action: IAction<TDialogType, IDialogState>): IDialogState => {
    return Object.assign({}, state, action.payload);
}