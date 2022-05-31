import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.head}>
            <div className={s.logo}>
                By Viktoria...
                <span className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}
                           </span>
            </div>
        </header>
    )
}  //сделать LOGOUT и сраницу LOGIN!!!

//types
type HeaderPropsType = {
    isAuth: boolean
    login: string
}