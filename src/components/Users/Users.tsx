import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUser([
            {
                id: '1',
                followed: true,
                fullName: 'Vika',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'},
                photoUrl: 'https://besthqwallpapers.com/Uploads/10-8-2018/61178/thumb2-4k-vika-bronova-2018-red-dress-fashion-models.jpg'
            },
            {
                id: '2',
                followed: true,
                fullName: 'Irina',
                status: 'I am so pretty',
                location: {city: 'Kiev', country: 'Ukraine'},
                photoUrl: 'https://uznayvse.ru/images/celebs/2017/4/shake_big.jpg'
            },
            {
                id: '3',
                followed: false,
                fullName: 'Diana',
                status: 'I am looking for a job...',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'https://zvezda.today/contents/models/144/s1_dina-saeva-image.jpg'
            }
        ])
    }

    return (<div>
        {
            props.users.map(u => {
                const onClickHandler = () => {
                    u.followed ? props.unfollow(u.id) : props.follow(u.id);
                }
                return <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl} className={s.photoUser}/></div>
                        <div><button onClick={onClickHandler}> {u.followed ? 'FOLLOW' : 'UNFOLLOW'}</button></div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            })
        }
    </div>)
}
