'use client';
import React from 'react'
import style from './nav.module.css'
const navigation = () => {
  return (
    <div className={style.nav}>
      <img src="../../assets/images/main_logo.png" alt="Main Logo" width="100px"/>
      <div className={style.navbuttons}>
        <button className={style.login}>Log In</button>
        <button className={style.getstarted}>Get Started</button>
      </div>
    </div>
  );
}

export default navigation
