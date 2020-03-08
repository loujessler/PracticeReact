let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        people: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Felix"}
        ],
        profilePage: {
            posts: [
                {id: 1, post: "Hi, how are you?", like: 50},
                {id: 2, post: "its my post", like: 5}
            ],
            newPostText: ''
        },
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost ();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    }
}

export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})
export const addPostActionCreator = () => ({type: ADD_POST})

export default store