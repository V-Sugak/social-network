import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {ActionsType, addMessageActionCreator, DialogsType, updateNewMessageTextActionCreator} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogs.dialogsItem.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messageElement = props.dialogs.messages.map(m => <Message message={m.message}/>)

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
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