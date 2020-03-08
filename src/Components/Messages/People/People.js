import React from "react";
import s from './People.module.css';
import {NavLink} from "react-router-dom";


const People = (props) => {

    return (
        <div className={s.items}>
            <NavLink to={`${props.path}${props.id}`} className={s.link} activeClassName={s.active}><span>{props.name}</span></NavLink>
        </div>
    )
}

export default People;