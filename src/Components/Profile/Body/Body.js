import React from 'react'
import s from './Body.module.css'
import Info from './Info/Info'
import PostBody from './PostBody/PostBody'

const Body = (props) => {
  return(
    <div className={s.bodyProfile}>
      <Info />
      <PostBody posts={props.posts} addPost={props.addPost}/>
    </div>
);
}

export default Body
