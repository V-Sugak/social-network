import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from './Message/Message';
import {initialStateDialogsType} from "../../redux/dialogs-reducer";
import {PostForm} from "../common/Forms/PostForm";

export const Dialogs = (props: DialogsPropsType) => {
    let dialogElement = props.state.dialogsItem.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)
    const onSendMessageClick = props.addMessage
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewMessageText(e.currentTarget.value)


    return (<div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.newMessage}>
                    {/*   <input value={props.state.newMessageText} onKeyPress={onKeyPressHandler}
                               onChange={onChangeHandler}/>


                        <button onClick={onSendMessageClick}>Send</button>*/}
                    <PostForm value={props.state.newMessageText}
                        //  onChangeHandler={onChangeHandler}
                              onButtonClick={onSendMessageClick}
                              buttonName={"Send"}
                    />
                </div>
            </div>
        </div>
    )
}


//types
type DialogsPropsType = {
    state: initialStateDialogsType
    addMessage: (value: string) => void
    updateNewMessageText: (text: string) => void
}