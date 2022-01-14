import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

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
}

