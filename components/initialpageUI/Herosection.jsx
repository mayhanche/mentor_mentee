'use client'
import React from 'react'
import style from './hero.module.css'

const herosection = () => {
  return (
    <div className={style.maindiv}>
      <div className={style.leftdiv}>
      <img src="../../assets/images/initial_img1.svg" alt="hero section image" width="500px"/>
      </div>
      <div className={style.rightdiv}>
      <h1 className={style.maintitle}>Achieve your goals <br/>faster with professional mentors 
      </h1>
      <button className={style.getstarted}>Get Started</button>
      </div>
    </div>
  )
}

export default herosection
