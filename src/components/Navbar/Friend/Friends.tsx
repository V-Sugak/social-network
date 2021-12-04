import React from 'react';
import s from './Friend.module.css'
import {FriendType} from "../../../redux/store";


type FriendPropsType = {
    friends: Array<FriendType>
}

export const Friends = (props: FriendPropsType) => {
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