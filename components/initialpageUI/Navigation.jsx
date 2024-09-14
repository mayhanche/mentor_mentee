'use client';
import React from 'react'
import style from './nav.module.css'
const navigation = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.logo}>Logo</h1>
      <div className={style.navbuttons}>
      <button className={style.login}>Log In</button>
      <button className={style.getstarted}>Get Started</button>
      </div>
    </div>
  );
}

export default navigation
