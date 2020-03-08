import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={s.dialog}>
            {props.message} hi
        </div>
    )
}

export default Dialogs;