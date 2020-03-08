import React from 'react'
import s from './Body.module.css'
import Info from './Info/Info'
import PostBody from './PostBody/PostBody'

const Body = (props) => {
  return(
    <div className={s.bodyProfile}>
      <Info />
      <PostBody posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
    </div>
);
}

export default Body
