import React from 'react'
import style from '@/components/aboutpageUI/about.module.css'

const About = () => {
  return (
    <div className={style.maindiv}>
        {/* Side Nav bar */}
        <div className={style.sidenav}>
            <ul className={style.items}>
                <li>Dashboard</li>
                <li>Explore</li> 
                <li>My Matches</li>
                <li>Message</li>
                <li>About</li>
            </ul>
            <div className={style.profilediv}>
              <img src="../../assets/icons/profile.svg" alt="Profile icon" width="50px"/>
            </div>
        </div>

        {/* About Page */}
        <div className={style.contentdiv}>
          <h1 className={style.title}>Our Main Goal</h1>
          <p className={style.text}>We guarantee you to improve your career development 
          <br/>from our mentors' guidance and support <br/>Aiming to contribute positively to society's progress <br/>together with you </p>
          <div className={style.aboutdiv}>
            <div className={style.left}>
              <img src="../../assets/images/guide.svg" alt="Guiding image" width="500px"/>
            </div>
            <div className={style.right}>
              <p className={style.text2}>" Guiding your journey <br/>with the perfect mentor match " </p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default About
