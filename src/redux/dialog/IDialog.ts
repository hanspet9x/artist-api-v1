export interface IDialogState {
    message: string;
    title: string;
    type: TDialogType;
    onConfirmed?(confirmed: boolean):void;
}

export type TDialogType = "alert" | "confirm" | "none";