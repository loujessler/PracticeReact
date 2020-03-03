import React from 'react'
import s from './Body.module.css'
import Info from './Info/Info'
import PostBody from './PostBody/PostBody'

const Body = () => {
  return(
    <div className={s.bodyProfile}>
      <Info />
      <PostBody />
    </div>
);
}

export default Body
