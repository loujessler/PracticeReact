import React from 'react'
import s from './PostBody.module.css'
import Post from './Post/Post'

const PostBody = () => {
  return(
  <div>
    <div>
      <div className={s.formPost}>
        <textarea type="text" cols="40" className={s.form__field} placeholder="New post..." name="New post" id='New post' required />
        <button className={s.buttonPost}>Post</button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message="Hi, how are you?" likeCounts="5"/>
      <Post likeCounts="50"/>
    </div>
  </div>
);
}

export default PostBody
