import { type } from 'os';
import React from 'react';
import s from "./Dialogs.module.css"
import { DialogsItem, DialogsItemTypeProps } from './DialogsItem/DialogsItem';
import { Message, MessageTypeProps } from './Message/Message';

export type DialogTypeProps = {
    dialogsItem: Array<DialogsItemTypeProps>
    messages: Array<MessageTypeProps>
}
export type DialogsTypeProps = {
    dialogs: DialogTypeProps
}


export const Dialogs = (props: DialogsTypeProps) => {

    let dialogElement = props.dialogs.dialogsItem.map(d => <DialogsItem name={d.name} id={d.id} />)

    let messageElement = props.dialogs.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItem} >
                {dialogElement}
            </div>
            <div className={s.messages} >
                {messageElement}
            </div>
        </div>
    )
}