import React from "react";
import s from './DialogsField.module.css';
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";


const DialogsField = (props) => {
    // debugger;
    let dialogsElements = props.id.map(people => <Dialogs id={people.id} name={people.name}/>);

    let newMessageElement = React.createRef();

    // Внутренние функции
    let send = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    // *****************

    let path = `/messages/id`;
    console.log(props.id)
    return (
        <div className={s.chatbox}>
            <div className={s.chat}>

                {/*<Route path="/messages/id1" render={(props) => <Dialogs dialog="hello, world!"/>}/>*/}
                {/*<Dialogs dialog="hello, world!"/>*/}
                {/*{dialogsElements}*/}
                <Route path={`${path}${props.id}`} render={(props) => <Dialogs dialog="hello, world!"/>}/>
                {/*<Route path="/messages/id3" component={Dialogs}/>*/}
            </div>
            <div className={s.textbox}>
                <textarea ref={newMessageElement} className={s.textarea}></textarea>
                <button onClick={send} className={s.buttonSend}>Send</button>
            </div>
        </div>
    )
}

export default DialogsField;