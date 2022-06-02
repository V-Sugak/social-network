import React, {MouseEvent} from "react";
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {usersURL} from "../../api/api";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

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
                    //    props.toggleIsFetching(true)
                    props.isDisabledHandler(u.id, true)
                    usersURL.follow(u.id).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(u.id);
                        }
                        //         props.toggleIsFetching(false)
                        props.isDisabledHandler(u.id, false)
                    })
                }
                const onClickUnfollowHandler = () => {
                    //   props.toggleIsFetching(true)
                    props.isDisabledHandler(u.id, true)
                    usersURL.unfollow(u.id).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                        }
                        //        props.toggleIsFetching(false)
                        props.isDisabledHandler(u.id, false)
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
                            <button onClick={onClickUnfollowHandler}
                                    disabled={props.isDisabled.some(id => id === u.id)}> FOLLOW </button>
                            : <button onClick={onClickFollowHandler}
                                      disabled={props.isDisabled.some(id => id === u.id)}> UNFOLLOW </button>}
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

//types
type UsersPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    isDisabled: Array<number>
    users: Array<UserType>
    onPageChanged: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isDisabledHandler: (userId: number, isFetching: boolean) => void
}