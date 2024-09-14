import React from 'react'
import style from '@/components/initialpageUI/contact.module.css'
const Contact = () => {
  return (
    <div>
        <div className={style.textdiv}>
            <h1 className={style.text}>Join now for free <br/>in just one minute or less</h1>
            <h2 className={style.subtext}>We hope to assist you in developing a professional career</h2>
            <h2 className={style.subtext}>Let's get ready to grow together with you on you learning journey !</h2>
        </div>
        <div className={style.maildiv}>
            <input className={style.email} type="email" placeholder="Email"/>
            <button className={style.getstarted}>Join Now</button>
        </div>
    </div>
  )
}

export default Contact
