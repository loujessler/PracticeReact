import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", like: 50},
                {id: 2, post: "its my post", like: 5}
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store