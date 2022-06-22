import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import {ThunkType} from "../../redux/redux-store";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.head}>
            <div className={s.logo}>
                By Viktoria...
                <span className={s.loginBlock}>
                    {props.isAuth ?
                        <div>
                            {props.login}
                            <button onClick={props.logout}>Log out</button>
                        </div>
                        : <NavLink to={'/login'}>LOGIN</NavLink>}
                           </span>
            </div>
        </header>
    )
}

//types
type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => ThunkType
}