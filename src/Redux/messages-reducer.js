const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    people: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Felix"}
    ],
    messages: [
        {id: 1, message: "Sasha"},
        {id: 2, message: "Alex"},
        {id: 3, message: "Felix"}
    ],
    newMessageBody: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messagesReducer;