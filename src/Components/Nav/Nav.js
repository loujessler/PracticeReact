import React from 'react'
import s from './Nav.module.css'
import NavBox from "./NavBox/NavBox";
import FriendsBox from "./FriendsBox/FriendsBox";

const Nav = (props) => {


  return(
    <nav className={s.nav}>
      <NavBox people={props.messagesPage.people}/>
      <FriendsBox people={props.messagesPage.people}/>
    </nav>
);
}

export default Nav
