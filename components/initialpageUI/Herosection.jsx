'use client'
import React from 'react'
import style from './hero.module.css'

const herosection = () => {
  return (
    <div className={style.maindiv}>
      <img src="../../assets/images/initial_img1.svg" alt="hero section image"/>
      <div className={style.right}>
      <h1 className={style.title}>Achieve your goals <br/>faster with professional mentors 
      </h1>
      <button className={style.getstarted}>Get Started</button>
      </div>
    </div>
  )
}

export default herosection
