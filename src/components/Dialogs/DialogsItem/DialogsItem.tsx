import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogsItem.module.css"
import {DialogItemType} from "../../../redux/state";


export const DialogsItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}