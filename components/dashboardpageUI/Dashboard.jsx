import React from 'react'
import style from '@/components/dashboardpageUI/dashboard.module.css'

const Sidenav = () => {
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
          <img src="../../assets/icons/profile.svg" alt="Profile icon" width="50px" />
        </div>
      </div>
      
      {/* Dashboard Page */}
      <div className={style.contentdiv}>
        {/* Welcome Div */}
        <div className={style.welcomediv}>
          <div className={style.leftdiv}>
            <h1 className={style.maintitle}>Glad you're here !</h1>
            <h3 className={style.text}>Success starts with the right mentor<br/>
            Begin your match-making journey!</h3>
          </div>
          <div class={style.rightdiv}>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
            <dotlottie-player src="https://lottie.host/12a84332-5921-4cc8-81d5-6caff3c9d857/4riMVeHiKE.json" background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </div>
        </div>

        {/* Blogs Div */}
        <h1 className={style.title}>Blogs</h1>
        <div class={style.blogsdiv}>
          <div class={style.blog}>
            <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
            <h3 className={style.blogtitle}>Blog One Title</h3><br/>
            <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
          </div>
          <div class={style.blog}>
            <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
            <h3 className={style.blogtitle}>Blog Two Title</h3><br/>
            <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
          </div>
          <div class={style.blog}>
            <img src="../../assets/icons/profile.svg" alt="Profile icon" width="30px"/><br/>
            <h3 className={style.blogtitle}>Blog Three Title</h3><br/>
            <img src="../../assets/images/testing.svg" alt="Testing Image" width="400px"/>
          </div>
        </div>

        {/* Announcement Div */}
        <div className={style.announcediv}>
          <h1 className={style.title}>Announcement</h1>
          <div class={style.infodiv}>
            {/* Announcement 1 */}
            <div className={style.left}>
              <h1 className={style.announcetitle}>New Webinar Alert !</h1><br/>
              <p className={style.announcetext}>There is a webinar about "Fundamentals of Information Systems" that will be held at Lobby Room 1 by speaker Kelvin </p>
            </div>
            <div className={style.right}>
              <p className={style.announcedate}>Sep 29</p>
            </div>
          </div>
          <hr className={style.line}></hr>
          
          {/* Announcement 2 */}
          <div class={style.infodiv}>
            <div className={style.left}>
              <h1 className={style.announcetitle}>Workshop Time !</h1><br/>
              <p className={style.announcetext}>"Make the World Green" workshop will be held to know more about environmental issues and how to increase the recycling rate </p>
            </div>
            <div className={style.right}>
              <p className={style.announcedate}>Oct 10</p>
            </div>
          </div>
          <hr className={style.line}></hr>

          {/* Announcement 3 */}
          <div class={style.infodiv}>
            <div className={style.left}>
              <h1 className={style.announcetitle}>New Mentor Orientation</h1><br/>
              <p className={style.announcetext}>Let's welcome our New Mentor <b>Kile Riley</b> and have some activities with our community</p>
            </div>
            <div className={style.right}>
              <p className={style.announcedate}>Oct 15</p>
            </div>
          </div>
          <hr className={style.line}></hr>
        </div>

      </div>
    </div>
  )
}

export default Sidenav
