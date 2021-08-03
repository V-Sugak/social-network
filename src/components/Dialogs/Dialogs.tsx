import React from 'react';
import s from "./Dialogs.module.css"
import { DialogsItem } from './DialogsItem/DialogsItem';
import { Message } from './Message/Message';

type DialogsTypeProps = {

}

export const Dialogs = (props: DialogsTypeProps) => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItem} >
                <DialogsItem name="Victoria" id="1" />
                <DialogsItem name="Diana" id="2" />
                <DialogsItem name="Irina" id="3" />
            </div>
            <div className={s.messages} >
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />
            </div>
        </div>
    )
}