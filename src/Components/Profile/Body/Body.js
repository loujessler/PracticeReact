import React from 'react'
import s from './Body.module.css'
import Info from './Info/Info'
import PostBody from './PostBody/PostBody'
import PostBodyContainer from "./PostBody/PostBodyContainer";

const Body = (props) => {
  return(
    <div className={s.bodyProfile}>
      <Info />
      <PostBodyContainer store={props.store}/>
    </div>
);
}

export default Body
