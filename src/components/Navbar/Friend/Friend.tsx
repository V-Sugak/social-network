import React from 'react';
import s from './Friend.module.css'
import {FriendType} from "../../../redux/state";


type FriendPropsType = {
    friends: Array<FriendType>
}

export const Friend = (props: FriendPropsType) => {
    return (
        <div className={s.fr}>
            {props.friends.map(f => {
                return (
                    <div className={s.f}>
                        <div><img className={s.avatar} src={f.avatar} alt=""/></div>
                        <div> {f.name}</div>
                    </div>
                )
            })}
        </div>
    )
}