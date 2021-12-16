import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import DialogAction from '../../redux/dialog/action';
import { IDialogState } from '../../redux/dialog/IDialog';
import { IRootState } from '../../redux/interface';
import { getClassNames } from '../../util';
import Alert from './Alert';
import Confirm from './Confirm';
import './Dialog.scss';

let dispatch:Dispatch;

export const alert = (dialog: IDialogState) => {
    
    dispatch(DialogAction.alert(dialog));
}

export const confirm = (dialog: IDialogState, callback: (confirmed: boolean) => void) => {
    const dialogState = {
        message: dialog.message,
        title: dialog.title,
        onConfirmed: callback,
        type: dialog.type,
    } as Required<IDialogState>
    dispatch(DialogAction.confirm(dialogState));
}

function Dialog() {
    const dialogState = useSelector((state: IRootState) => state.dialog);
    dispatch = useDispatch();

    const onHide = () => {
        dispatch(DialogAction.hide())
    }

    const onConfirm = (confirmed: boolean) => {
        dispatch(DialogAction.hide())
        dialogState.onConfirmed && dialogState.onConfirmed(confirmed);
    }

    const getDialogByType = () => {
        switch (dialogState.type) {
            case "alert":
                return <Alert box={dialogState} onHide={onHide} />
               
            case "confirm":
                return <Confirm box={dialogState} onConfirmed={onConfirm} />
            default:
                return <></>
        }
    }
    return (
        <div className={getClassNames('dialog-box', dialogState.type === "none" ? 'dialog-close' : '')}>
            {getDialogByType()}
        </div>
    );
}

export default Dialog;