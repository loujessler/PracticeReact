import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import PostBody from "./PostBody";

const PostBodyContainer = (props) => {
  let state = props.store.getState();
  // Внешние функции для PostBody
    let addPost = () => {
      props.store.dispatch(addPostActionCreator());
    }


  let onPostChange = (text) =>{
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  // *****************
  return(<PostBody  updateNewPostText = {onPostChange}
                    addPost = {addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>);
}

export default PostBodyContainer
