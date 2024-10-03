'use client';
import React from 'react'
import style from '@/components/dashboardpageUI/globalnav.module.css'

const Globalnav = () => {
  return (
    <div className={style.nav}>
        <div className={style.logodiv}>
            <img src="../../assets/images/main_logo.png" alt="Main Logo" width="100px"/>
        </div>
        <div className={style.notidiv}>
            <img src="../../assets/icons/notification.svg" alt="Notification icon" width="30px"/>
        </div>
        <div className={style.btndiv}>
            <button className={style.browse}>Browse Mentor</button>
        </div>
    </div>
  )
}

export default Globalnav