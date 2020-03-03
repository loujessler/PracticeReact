import React from 'react'
import s from './Post.module.css'
import like from './like.ico'

const Post = (props) => {
  return(
      <div className={s.post}>
        <div className={s.avatar}></div>
        <div className={s.item}>
          {props.message}
          <div className={s.like}>
            <span>{props.likeCounts} </span>
            <button><img src={like} /></button>
          </div>
        </div>
      </div>
);
}

export default Post
