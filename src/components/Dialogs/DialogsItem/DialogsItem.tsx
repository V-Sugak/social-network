import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./DialogsItem.module.css"


type DialogsItemTypeProps = {
    name: string
    id: string
}

export const DialogsItem = (props: DialogsItemTypeProps) => {
    return (
            <div className={s.dialog + ' ' + s.active} >
                <NavLink to={'/dialogs/'+props.id}> {props.name} </NavLink>
            </div>
    )
}