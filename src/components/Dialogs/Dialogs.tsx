import React from 'react';
import s from "./Dialogs.module.css"
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElement = props.dialogs.dialogsItem.map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messageElement = props.dialogs.messages.map(m => <Message message={m.message}/>)
    
    let newMessage = React.createRef<HTMLInputElement>()
    
    const sendMessage = () => {
       if (newMessage.current) {
           alert(newMessage.current.value)
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
                    <input ref={newMessage}></input>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}