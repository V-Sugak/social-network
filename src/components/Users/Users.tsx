import React, {MouseEvent} from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(n => {
                let onClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
                    props.onPageChanged(n)
                }
                return <span onClick={onClickHandler}
                             className={props.currentPage === n ? s.userPage : ''}>{n} </span>
            })}
        </div>
        {
            props.users.map(u => {
                const onClickFollowHandler = () => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                        {
                            withCredentials: true,
                            headers: {'API-KEY': '4fa630d1-6fae-4037-80dd-d195b9c3e03c'}
                        }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(u.id);
                        }
                    })
                }
                const onClickUnfollowHandler = () => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                            withCredentials: true,
                            headers: {'API-KEY': '4fa630d1-6fae-4037-80dd-d195b9c3e03c'}
                        }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                        }
                    })
                }
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.photoUser}/>
                            </NavLink>
                        </div>
                        <div> {u.followed ?
                            <button onClick={onClickUnfollowHandler}> FOLLOW </button>
                            : <button onClick={onClickFollowHandler}> UNFOLLOW </button>}
                            </div>
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
    </div>
}