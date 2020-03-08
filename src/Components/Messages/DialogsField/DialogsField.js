import React from "react";
import s from './DialogsField.module.css';
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/messages-reducer";



const DialogsField = (props) => {
    let dialogsElements = props.messagesPage.messages.map(messages => <Dialogs id={messages.id} message={messages.message}/>);
    let newMessageBody = props.messagesPage.newMessageBody;
    let newMessageElement = React.createRef();

    // Внутренние функции
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    // *****************

    let path = `/messages/id`;

    return (
        <div className={s.chatbox}>
            <div className={s.chat}>
                {/*<Route path="/messages/id1" render={(props) => <Dialogs dialog="hello, world!"/>}/>*/}

                {/*<Route path={`${path}${props.messages.id}`} render={(props) => ({dialogsElements})}/>*/}
                {dialogsElements}
            </div>
            <div className={s.textbox}>
                <textarea  onChange={onNewMessageChange}
                           value={newMessageBody}
                           placeholder='Enter your message'
                           ref={newMessageElement}
                           className={s.textarea}></textarea>
                <button onClick={onSendMessageClick} className={s.buttonSend}>Send</button>
            </div>
        </div>
    )
}

export default DialogsField;