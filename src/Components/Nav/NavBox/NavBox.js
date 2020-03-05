import React from 'react'
import s from './NavBox.module.css'
import {NavLink} from "react-router-dom";
import FriendsBox from "../FriendsBox/FriendsBox";

const NavBox = (props) => {
    return (
        <div className={s.nav_box}>
            <div className={s.item}>
                <NavLink to="/profile" className={s.link} activeClassName={s.active}>
                    <span>Profile</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages" className={s.link} activeClassName={s.active}>
                    <span>Messages</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={s.link} activeClassName={s.active}>
                    <span>News</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={s.link} activeClassName={s.active}>
                    <span>Music</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={s.link} activeClassName={s.active}>
                    <span>Settings</span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className={s.link} activeClassName={s.active}>
                    <span>
                      Friends
                    </span>
                </NavLink>
                <FriendsBox people={props.people}/>
            </div>
        </div>
    );
}

export default NavBox
