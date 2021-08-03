import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Message.module.css"


type MessageTypeProps = {
   message:string
}

export const Message = (props: MessageTypeProps) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}