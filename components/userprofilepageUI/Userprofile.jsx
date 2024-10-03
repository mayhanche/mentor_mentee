import React from 'react'
import style from '@/components/userprofilepageUI/userprofile.module.css'

const Userprofile = () => {
  return (
    <div class={style.maindiv}>
        {/* Side Nav bar */}
        <div class={style.sidenav}>
            <ul class={style.items}>
                <li>Dashboard</li>
                <li>Explore</li> 
                <li>My Matches</li>
                <li>Message</li>
                <li>About</li>
            </ul>
            <div className={style.profilediv}>
                <img src="../../assets/icons/profile.svg" alt="Profile icon" width="50px" />
            </div>
        </div>

        {/* User Profile Page */}
        <div class={style.contentdiv}>
            {/* Profile div */}
            <div class={style.profilediv}>
                <div class={style.left}>
                    <img src="../../assets/images/femaleprofile.svg" alt="User Profile" className={style.profileimg}/>
                </div>
                <div class={style.right}>
                    <p className={style.name}>Riley Young</p>
                    <p className={style.jobtitle}>Web Frontend Developer</p>
                </div>
            </div>

            <hr className={style.line}/>

            {/* Bio and Background */}
            <div className={style.infodiv}>
                <div className={style.bio}>
                    <h1 className={style.title}>Bio</h1>
                    <p className={style.text}>A passionate youth who is currently learning Web Development and willing to apply my skills. <br/>Working as a Programming Instructor who teaches coding to young learners.</p>
                </div>
                <div className={style.social}>
                    <h1 className={style.title}>Add social accounts</h1>
                </div>
                <div className={style.background}>
                    <h1 className={style.title}>Background</h1>
                    <h2 className={style.smalltitle}>Educational Background</h2>
                    <p></p>
                    <h2 className={style.smalltitle}>Job Experience</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Userprofile
