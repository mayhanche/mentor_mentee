"use client"
import React, { useState } from 'react'
import style from '@/components/buildingprofileUI/buildingprofile.module.css'

const Buildingprofile = () => {
    const [name, setName] = useState('');
    const changeName = (event) =>{
        setName(event.target.value)
    }

  return (
    <div className='flex justify-between' >
        {/* Left Div */}
        <div className='w-1/2'>
            <form className={style.formdiv}>
                {/* Form Left Side */}
                <div className= 'flex justify-between '>
                <div>
                    <label for="name" className={style.labels}>Name</label>
                    <input type="text" id="name" value={name} className={style.input} required onChange={changeName} />

                    <label for="job" className={style.labels}>Job title</label>
                    <input type="text" id="job" className={style.input}/>

                    <label for="field" className={style.labels}>Field</label>
                    <select className={style.dropdown} required>
                        <option value="tech">Information Technology</option>
                        <option value="health">Healthcare</option>
                        <option value="engineer">Engineering</option>
                        <option value="business">Business and Finance</option>
                        <option value="education">Education</option>
                    </select>
                </div>
 
                {/* Form Right Side */}
                <div>
                    <label for="country" className={style.labels}>Country</label>
                    <input type="text" id="country" className={style.input}/>

                    <label for="uni" className={style.labels}>Current School/ University</label>
                    <input type="text" id="uni" className={style.input}/>

                    <label for="level" className={style.labels}>Proficiency level</label>
                    <select className={style.dropdown} required>
                        <option value="starter">Starter</option> 
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="professional">Professional</option>
                    </select>
                </div>
                </div>
                {/* Bio Section */}
                <label htmlFor="bio" className={style.labels}>Bio</label>
                <textarea id="bio" rows="5" className={style.input} style={{ width: '100%', height: '150px' }} required></textarea>
            </form>
        </div>
        {/* Right div */}
        <div className='mr-auto p-[50px] pt-[100px] ' >
            <h1>Name : {name}</h1>
        </div>
    </div>
  )
}

export default Buildingprofile
