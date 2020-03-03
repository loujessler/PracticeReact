import React from 'react'
import s from './Post.module.css'

const Post = () => {
  return(
      <div className={s.post}>
        <div className={s.avatar}></div>
        <div className={s.item}>Post1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic, porro nesciunt cumque rerum sapiente velit, dolorem fugiat, quo eos quibusdam sit, tempora rem cum quas. Quis maxime, totam omnis.</div>
      </div>
);
}

export default Post
