import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from  '../../assets/images/user.png'

export const Users = (props: UsersPropsType) => {
let getUsers = () => {
    if (props.items.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUser(response.data.items)
        })
    }}

    return (<div>
        <button onClick={getUsers}>GET USERS</button>
        {
            props.items.map(u => {
                const onClickHandler = () => {
                    u.followed ? props.unfollow(u.id) : props.follow(u.id);
                }
                return <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.photoUser}/></div>
                        <div><button onClick={onClickHandler}> {u.followed ? 'FOLLOW' : 'UNFOLLOW'}</button></div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            })
        }
    </div>)
}
