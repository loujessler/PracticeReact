import React from 'react'
import s from './PostBody.module.css'
import Post from './Post/Post'





const PostBody = (props) => {
  let newPostElement = React.createRef();

  // Внутренние функции
  let post = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  // *****************

  let postsElements = props.posts.map(p => <Post message={p.post} likeCounts={p.like}/>)

  return(
  <div>
    <div>
      <div className={s.formPost}>
        <textarea ref={newPostElement} type="text" cols="40" className={s.form__field} placeholder="New post..." name="New post" id='New post' required />
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
