import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [{id: 1, post: "Hi, how are you?", like: 50}, {id: 2, post: "its my post", like: 5}]
let peopleData = [{id: 1, name: "Sasha"}, {id: 2, name: "Alex"}, {id: 3, name: "Felix"}]


ReactDOM.render(<App posts={postsData} people={peopleData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
