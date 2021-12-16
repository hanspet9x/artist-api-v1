import React from 'react';
import { IDialogState } from '../../redux/dialog/IDialog';

interface BoxProps {
  box: IDialogState,
  onHide():void;
}
function Alert(props: BoxProps) {
    return (
        <div className="dialog-box">
            <div className="title">{props.box.title}</div>
            <div className="message">{props.box.message}</div>
            <div className="buttons">
                <button autoFocus onClick={props.onHide}>ok</button>
            </div>
        </div>
    );
}

export default Alert;