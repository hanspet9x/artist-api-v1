import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogAction from '../../redux/dialog/action';
import { IDialogState } from '../../redux/dialog/IDialog';
import { IRootState } from '../../redux/interface';

export const useAlert = (dialog: IDialogState) => {
    const dispatch = useDispatch();
    dispatch(DialogAction.alert(dialog));
}

export const useConfirm = (dialog: IDialogState, callback: (confirmed: boolean) => void) => {
    const dispatch = useDispatch();
    const dialogState = {
        message: dialog.message,
        title: dialog.title,
        onConfirmed: callback,
        type: dialog.type,
    } as Required<IDialogState>
    dispatch(DialogAction.confirm(dialogState));
}

function Dialog() {
    const selector = useSelector((state: IRootState) => state.dialog);

    return (
        <div>
            
        </div>
    );
}

export default Dialog;