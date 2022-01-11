import React from 'react';
import s from './Friend.module.css';

type FriendType = {
    id: number
    name: string
    avatar: string
}

type FriendPropsType = {
    friends: Array<FriendType>
}

export const Friends = (props: FriendPropsType) => {
    return (
        <div className={s.fr}>
            {props.friends.map(f => {
                return (
                    <div key={f.id} className={s.f}>
                        <div><img className={s.avatar} src={f.avatar} alt=""/></div>
                        <div> {f.name}</div>
                    </div>
                )
            })}
        </div>
    )
}