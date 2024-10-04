'use client'
import React from 'react'
import style from '@/components/loginpageUI/login.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <div className={style.wholediv}>
      {/*
        <div className={style.nav}>
          <h1 className={style.logo}>Logo</h1>
        </div>
      */}
        
        <div className={style.maindiv}>
          <div className={style.leftdiv}>
            <img src="../../assets/images/login_img1.svg" alt="Login Image" width="400px"/>
          </div>
          <div className={style.rightdiv}>
            <h1 className={style.title}>Login</h1>
            <form className={style.form}>
              <label for="email" className={style.labels}>Email</label>
              <input type="email" id="email" className={style.input}/>
              <label for="psw" className={style.labels}>Password</label>
              <input type="password" id="psw" className={style.input}/><br/>
              <input type="checkbox" id="showpsw"/>
              <label for="showpsw" className={style.showpsw}>Show password</label><br/>
            </form>
              <button onClick={() => router.push('/dashboard')}  className={style.login}>Log In</button>
            <div className={style.links}>
              <a href="#">Forgot password ?</a>
              <a href="#">Don't have an account ? <br/>Sign Up</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
