import React from 'react';
import s from './Header.module.css';

type HeaderTypeProps = {

}

export const Header = (props: HeaderTypeProps) => {
    return (
        <header className={s.head}>
            <img src="https://www.internetmatters.org/wp-content/uploads/2019/06/ManageChildrensSocialMediaActivity-1.png" />
        </header>
    )
}