import { IAction } from "../action";
import { IDialogState } from "./IDialog";


export const SHOW_DIALOG = "showDialog";
export const HIDE_DIALOG = "hideDialog";
export default class DialogAction {


    static show(dialog: Exclude<IDialogState, "onConfirmed">): IAction<string, IDialogState>{
        return {type: SHOW_DIALOG, payload: dialog}
    }

    static hide(): IAction<string, IDialogState> {
        const dialogState = {
            message: "",
            title: "",
            type: "none",
            
        } as IDialogState
        return {type: HIDE_DIALOG, payload: dialogState}
    }
}