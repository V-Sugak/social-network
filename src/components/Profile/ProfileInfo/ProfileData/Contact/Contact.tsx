import React from "react";
import s from "./Contact.module.css"

export const Contact = (props: ContactPropsType) => {
    return <div className={s.contactBlock}>
        <b>{props.title}: </b> <span>{props.value}</span>

    </div>
}

//types
type ContactPropsType = {
    title: string
    value: string
}