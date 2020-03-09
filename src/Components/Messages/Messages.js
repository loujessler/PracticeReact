import React from "react";
import s from './Messages.module.css';
import People from "./People/People";
import DialogsFieldContainer from "./DialogsField/DialogsFieldContainer";


const Messages = (props) => {
    let state = props.store.getState();
    let path = `/messages/id`;
    // let dialogsElements = props.people.map(people => <DialogsField id={people.id} name={people.name} path={path}/>)
    let peopleElements = state.messagesPage.people.map(people => <People id={people.id} name={people.name} path={path}/>)
    return (
        <div className={s.messagesBody}>
            <div className={s.people}>
                {peopleElements}
            </div>
            <div className={s.chat}>
                {/*{dialogsElements}*/}
                <DialogsFieldContainer store={props.store}/>
                {/*<Route path={`${path}${props.id}`} render={() => <DialogsField />}/>*/}
                {/*<Route path={`${path}${props.id}`} component={DialogsField}/>*/}
            </div>
        </div>
    )
}

export default Messages;