import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogsItem.module.css"
import {DialogItemType} from "../../../redux/state";

type DialogsItemPropsType = DialogItemType;

export const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}