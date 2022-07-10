import React from "react";
import s from "./Contact.module.css"

export const Contact = (props: ContactPropsType) => {
    return <div className={s.contactBlock}>
        <b>{props.title}: </b> {props.value}
    </div>
}

//types
type ContactPropsType = {
    title: string
    value: string
}