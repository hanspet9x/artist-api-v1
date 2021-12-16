import React from 'react';
import { IDialogState } from '../../redux/dialog/IDialog';

interface BoxProps {
  box: IDialogState,
  onConfirmed(confirmed: boolean):void
}
function Confirm(props: BoxProps) {
    return (
        <div className="dialog-box">
            <div className="title">{props.box.title}</div>
            <div className="message">{props.box.message}</div>
            <div className="buttons">
                <button autoFocus onClick={props.onConfirmed.bind(null, false)}>cancel</button>
                <button onClick={props.onConfirmed.bind(null, true)}>ok</button>
            </div>
        </div>
    );
}

export default Confirm;