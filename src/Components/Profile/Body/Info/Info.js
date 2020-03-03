import React from 'react'
import s from './Info.module.css'

const Info = () => {
  return(
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
);
}

export default Info
