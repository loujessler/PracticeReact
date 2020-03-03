import React from 'react'
import s from './Nav.module.css'

const Nav = () => {
  return(
    <nav className={s.nav}>
      <div className={s.nav_box}>
        <div className={s.item}><a href="#"><span>Profile</span></a></div>
        <div className={s.item}><a href="#"><span>Messages</span></a></div>
        <div className={s.item}><a href="#"><span>News</span></a></div>
        <div className={s.item}><a href="#"><span>Music</span></a></div>
        <div className={s.item}><a href="#"><span>Settings</span></a></div>
      </div>
    </nav>
);
}

export default Nav
