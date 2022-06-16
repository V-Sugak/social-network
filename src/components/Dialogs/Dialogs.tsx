import React from "react";
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from './Message/Message';
import {PostForm} from "../common/Forms/PostForm";
import {StateDialogsType} from "../../redux/dialogs-reducer";

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElement = props.state.dialogsItem.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    return (<div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.newMessage}>
                    <PostForm onSubmit={props.addMessage} buttonName={"Send"}/>
                </div>
            </div>
        </div>
    )
}


//types
type DialogsPropsType = {
    state: StateDialogsType
    addMessage: (value: string) => void
}