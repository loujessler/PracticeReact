import React from 'react'
import s from './FriendsBox.module.css'
import {NavLink} from "react-router-dom";
import People from "../../Messages/People/People";

const FriendsBox = (props) => {

    let path = `/id`;
    let peopleElements = props.people.map(people => <People id={people.id} name={people.name} path={path}/>)

    return (
        <div className={s.friendsBox}>
            <div className={s.items}>
                {peopleElements}
            </div>
        </div>
    );
}

export default FriendsBox
