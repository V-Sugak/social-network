import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.head}>
            <div className={s.logo}>
                By Viktoria...
                <span className={s.loginBlock}>
                <NavLink to={'/login'}>LOGIN</NavLink>
            </span>
            </div>
        </header>
    )
}

