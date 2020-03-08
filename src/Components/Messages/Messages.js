import React from "react";
import s from './Messages.module.css';
import People from "./People/People";
import DialogsField from "./DialogsField/DialogsField";


const Messages = (props) => {
    let path = `/messages/id`;
    // let dialogsElements = props.people.map(people => <DialogsField id={people.id} name={people.name} path={path}/>)
    let peopleElements = props.messagesPage.people.map(people => <People id={people.id} name={people.name} path={path}/>)
    return (
        <div className={s.messagesBody}>
            <div className={s.people}>
                {peopleElements}
            </div>
            <div className={s.chat}>
                {/*{dialogsElements}*/}
                <DialogsField messagesPage={props.messagesPage} dispatch={props.dispatch}/>
                {/*<Route path={`${path}${props.id}`} render={() => <DialogsField />}/>*/}
                {/*<Route path={`${path}${props.id}`} component={DialogsField}/>*/}
            </div>
        </div>
    )
}

export default Messages;