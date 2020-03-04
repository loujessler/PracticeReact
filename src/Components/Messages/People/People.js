import React from "react";
import s from './People.module.css';
import {NavLink} from "react-router-dom";


const People = (props) => {
    let path = `/messages/id${props.id}`;

    return(
        <div className={s.items}>
            <NavLink to={path} activeClassName={s.active}><span>{props.name}</span></NavLink>
        </div>
    )
}

export default People;