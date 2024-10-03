import React from 'react'
import style from '@/components/mymatchespageUI/mymatches.module.css'

const Mymatches = () => {
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

        {/* My Matches Page */}
        <div class={style.contentdiv}>
            {/* My Schedule */}
            <div class={style.schedule}>
                <h1 className={style.title}>My Schedule</h1>
                <div className={style.text}>
                    <p>You have a session with <b>Mentor Kelvin</b></p>
                    <p>Meeting will start from <b>9:00 AM to 10:00 AM</b> on <b>Sep 30, 2024</b></p><br/>
                    <a href="#"><b>Zoom meeting link</b></a><br/><br/>
                    <p>This link will be only available when it reaches to the given session time</p>
                </div>
                <div className={style.text}>
                    <p>You have a session with <b>Mentor David John Morles</b></p>
                    <p>Meeeting will start from <b>3:45 PM to 5:00 PM</b> on <b>Dec 12, 2024</b></p><br/>
                    <a href="#"><b>Zoom meeting link</b></a><br/><br/>
                    <p>This link will be only available when it reaches to the given session time</p>
                </div>
            </div>

            {/* My Matches */}
            <h1 className={style.title}>My Matches</h1>
            <div class={style.matches}>
                {/* Mentor 1 */}
                <div className={style.mentor}>
                    <img src="../../assets/images/profile.svg" alt="profile picture" className={style.image}></img>
                    <h2 className={style.name}>David Johnson</h2>
                    <p className={style.jobtitle}>Web Frontend Developer</p>
                    <p className={style.experience}>3 years</p>
                    <button className={style.button}>View Profile</button>
                </div>
                {/* Mentor 2 */}
                <div className={style.mentor}>
                    <img src="../../assets/images/profile.svg" alt="profile picture" className={style.image}></img>
                    <h2 className={style.name}>Ryan Paul Kim</h2>
                    <p className={style.jobtitle}>Operation Manager</p>
                    <p className={style.experience}>8 years</p>
                    <button className={style.button}>View Profile</button>
                </div>
                {/* Mentor 3 */}
                <div className={style.mentor}>
                    <img src="../../assets/images/profile.svg" alt="profile picture" className={style.image}></img>
                    <h2 className={style.name}>Hazel Ley</h2>
                    <p className={style.jobtitle}>Data Analyst</p>
                    <p className={style.experience}>4 years</p>
                    <button className={style.button}>View Profile</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Mymatches
