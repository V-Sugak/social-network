import React, {MouseEvent} from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {ItemsType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UsersProps = {
    pageSize: number
    totalCount: number
    currentPage: number
    items: Array<ItemsType>
    onPageChanged: (currentPage:number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props:UsersProps) => {

    let pagesCount = Math.ceil(props.totalCount /props.pageSize);
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
            props.items.map(u => {
                const onClickHandler = () => {
                    u.followed ? props.unfollow(u.id) : props.follow(u.id);
                }
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile'}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={s.photoUser}/>
                            </NavLink>
                        </div>
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
    </div>
}