import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogs.dialogsItem.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messageElement = props.dialogs.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef<HTMLInputElement>()

    const sendMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.newMessage}>
                    <input value={props.dialogs.newMessageText} onKeyPress={onKeyPressHandler}
                           onChange={onChangeHandler}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}