import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType
}

export const Dialogs = (props:DialogsPropsType) => {

    let dialogElement = props.dialogs.dialogsItem.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messageElement = props.dialogs.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}