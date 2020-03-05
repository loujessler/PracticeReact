import React from "react";
import s from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import People from "./People/People";
import {Route} from "react-router-dom";


const Messages = (props) => {
    let path = `/messages/id`;
    let peopleElements = props.people.map(people => <People id={people.id} name={people.name} path={path}/>)

    return (
        <div className={s.messagesBody}>
            <div>
                {peopleElements}
            </div>
            {/*<Dialogs />*/}
            <div>
                <Route path="/messages/id1" render={(props) => <Dialogs dialog="hello, world!"/>}/>
                <Route path={path} component={Dialogs}/>
                <Route path="/messages/id3" component={Dialogs}/>
            </div>
        </div>
    )
}

export default Messages;