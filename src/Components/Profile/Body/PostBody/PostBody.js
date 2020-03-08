import React from 'react'
import s from './PostBody.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/state";





const PostBody = (props) => {


  let newPostElement = React.createRef();
  let postsElements = props.posts.map(p => <Post message={p.post} likeCounts={p.like}/>)

  // Внутренние функции

    let post = () => {
      if (newPostElement.current.value != '') {
        props.dispatch(addPostActionCreator());
      }
    }


  let onPostChange = () =>{
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  // *****************

  return(
  <div>
    <div>
      <div className={s.formPost}>
        <textarea ref={newPostElement} onChange={onPostChange}
                  value={props.newPostText}
                  type="text" cols="40" className={s.form__field} placeholder="New post..."/>
        <button onClick={post} className={s.buttonPost}>Post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
);
}

export default PostBody
