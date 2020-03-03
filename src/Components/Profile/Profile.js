import React from 'react'
import s from './Profile.module.css'
import Body from './Body/Body'

const Profile = () => {
  return(
    <div className={s.profile}>
      <div className={s.headerimg}>
      </div>
      <Body />
    </div>
);
}

export default Profile
