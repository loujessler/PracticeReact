import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
  return(
    <div className={s.profile}>
      <div className={s.headerimg}>
      </div>
      <div className={s.bodyProfile}>
        <div className={s.info}>
          <div className={s.avatar}></div>
          <div className={s.name}>
            <span>Skilled None</span>
          </div>
          <div className={s.life}>
            <span className={s.birth}>Date of Birth: 2 january</span>
            <span className={s.city}>City: Moscow</span>
            <span className={s.education}>Education: CSU</span>
            <span className={s.site}>Web Site: www.loujessler.milan-holidays.net</span>
          </div>
        </div>
        <div>
          <div>
            <input type="input" className={s.form__field} placeholder="New post" name="New post" id='New post' required />

          </div>
        </div>
        <div className={s.posts}>
          <div className={s.post}>
            <div className={s.avatar}></div>
            <div className={s.item}>Post1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic, porro nesciunt cumque rerum sapiente velit, dolorem fugiat, quo eos quibusdam sit, tempora rem cum quas. Quis maxime, totam omnis.</div>
          </div>
          <div className={s.post}>
            <div className={s.avatar}></div>
            <div className={s.item}>Post1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic, porro nesciunt cumque rerum sapiente velit, dolorem fugiat, quo eos quibusdam sit, tempora rem cum quas. Quis maxime, totam omnis.</div>
          </div>        </div>
      </div>
    </div>
);
}

export default Profile
