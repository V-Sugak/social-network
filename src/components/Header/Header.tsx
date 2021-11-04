import React from 'react';
import s from './Header.module.css';

type HeaderTypeProps = {}

export const Header = (props: HeaderTypeProps) => {
    return (
        <header className={s.head}>
            <div className={s.logo}>By Viktoria...</div>
        </header>
    )
}