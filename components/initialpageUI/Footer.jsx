import React from 'react'
import style from '@/components/initialpageUI/footer.module.css'
import { FaFacebook, FaInstagram,  FaLinkedin, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className={style.maindiv}>
        <h1 className={style.copyright}>&copy; Copyright by MentorMatch 2024</h1>
        <div className={style.icons}>
            <FaFacebook color="blue"/>  
            <FaYoutube color="#FF0000"/> 
            <FaInstagram color="#E1306C"/>
            <FaLinkedin color="#0077B5"/>
        </div>
    </div>
  )
}

export default Footer
