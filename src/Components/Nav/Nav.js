import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
  return(
    <nav className={s.nav}>
      <div className={s.nav_box}>
        <div className={s.item}>
            <NavLink to="/profile" className={s.link} activeClassName={s.active}><span>Profile</span></NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/messages" className={s.link} activeClassName={s.active}><span>Messages</span></NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={s.link} activeClassName={s.active}><span>News</span></NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={s.link} activeClassName={s.active}><span>Music</span></NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={s.link} activeClassName={s.active}><span>Settings</span></NavLink>
        </div>
      </div>
    </nav>
);
}

export default Nav
