import React from 'react'
import s from './Profile.module.css'
import Body from './Body/Body'



const Profile = (props) => {
  return(
    <div className={s.profile}>
      <div className={s.headerimg}>
      </div>
      <Body posts={props.posts} addPost={props.addPost}/>
    </div>
);
}

export default Profile
