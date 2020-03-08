import React from 'react'
import s from './Profile.module.css'
import Body from './Body/Body'



const Profile = (props) => {
  return(
    <div className={s.profile}>
      <div className={s.headerimg}>
      </div>
      <Body profilePage={props.profilePage}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch} />
    </div>
);
}

export default Profile
