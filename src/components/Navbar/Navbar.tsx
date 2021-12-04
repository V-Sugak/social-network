import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'
import {Friends} from "./Friend/Friends";
import {SidebarType} from "../../redux/store";


type NavbarTypeProps = {
    sidebar: SidebarType
}

export const Navbar = (props: NavbarTypeProps) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}> Profile </NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}> Messages </NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}> News </NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}> Music </NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}> Settings </NavLink></div>

            <div className={s.friends}>
                Friends
                <div className={s.friend}>
                    <Friends friends={props.sidebar.friends}/>
                </div>
            </div>
        </nav>
    )
}