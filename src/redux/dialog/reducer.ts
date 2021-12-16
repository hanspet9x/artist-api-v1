import { IAction } from "../action";
import { IDialogState, TDialogType } from "./IDialog"

const initState = {
    message: "Hello",
    type: "alert",
    title: "Alert",
    onConfirmed: () => {}

} as IDialogState;

export const dialogReducer = (state = initState, action: IAction<TDialogType, IDialogState>): IDialogState => {
    return Object.assign({}, state, action.payload);
}