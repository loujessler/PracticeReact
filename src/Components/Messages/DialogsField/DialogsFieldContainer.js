import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/messages-reducer";
import DialogsField from "./DialogsField";



const DialogsFieldContainer = (props) => {
    let state = props.store.getState();
    // Внешние функции для DialogsField
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    // *****************
    return (
        <DialogsField sendMessage={sendMessage}
                      updateNewMessageBody={updateNewMessageBody}
                      messages={state.messagesPage.messages}
                      newMessageBody={state.messagesPage.newMessageBody}
        />
    )
}

export default DialogsFieldContainer;