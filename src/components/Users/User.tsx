import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

export const User = (props: UserPropsType) => {
    return <div>
                            <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}
                                 className={s.photoUser}/>
                            </NavLink>
                        </div>
                        <div> {props.user.followed ?
                            <button onClick={props.onClickUnfollowHandler}
                                    disabled={props.isDisabled.some(id => id === props.user.id)}> FOLLOW </button>
                            : <button onClick={props.onClickFollowHandler}
                                      disabled={props.isDisabled.some(id => id === props.user.id)}> UNFOLLOW </button>}
                            </div>
                    </span>
        <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
    </div>
}

//types
type UserPropsType = {
    user: UserType
    onClickUnfollowHandler: () => void
    onClickFollowHandler: () => void
    isDisabled: Array<number>
}