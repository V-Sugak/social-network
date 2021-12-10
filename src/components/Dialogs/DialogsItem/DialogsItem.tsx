import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogsItem.module.css"

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogsItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}