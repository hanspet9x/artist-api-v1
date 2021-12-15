import { IAction } from "../action";
import { IDialogState, TDialogType } from "./IDialog";


export default class DialogAction {


    static alert(dialog: Exclude<IDialogState, "onConfirmed">): IAction<TDialogType, IDialogState>{
        return {type: "alert", payload: dialog}
    }

    static confirm(dialog: Required<IDialogState>): IAction<TDialogType, IDialogState> {
        return {type: "confirm", payload: dialog}
    }

    static hide(dialog: IDialogState): IAction<TDialogType, IDialogState> {
        return {type: "none", payload: dialog}
    }
}