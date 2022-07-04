import React from "react";
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


export const Users = (props: UsersPropsType) => {
    return <div>
        <Paginator onPageChanged={props.onPageChanged} pageSize={props.pageSize} currentPage={props.currentPage}
                   totalCount={props.totalCount}/>
        {
            props.users.map(u => {
                const onClickFollowHandler = () => {
                    props.follow(u.id)
                }
                const onClickUnfollowHandler = () => {
                    props.unfollow(u.id)
                }
                return <User key={u.id}
                             user={u}
                             onClickUnfollowHandler={onClickUnfollowHandler}
                             onClickFollowHandler={onClickFollowHandler}
                             isDisabled={props.isDisabled}/>
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
}