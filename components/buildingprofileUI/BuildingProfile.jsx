"use client"
import React, { useState } from 'react'
import style from '@/components/buildingprofileUI/buildingprofile.module.css'

const Buildingprofile = () => {
    const [name, setName] = useState('');
    const changeName = (event) => {
        setName(event.target.value)
    }
    const [job, setJob] = useState(''); 
    const changeJob = (event) => {
        setJob(event.target.value)
    }
    const [field, setField] = useState(''); 
    const changeField = (event) => {
        setField(event.target.value)
    }
    const [country, setCountry] = useState(''); 
    const changeCountry = (event) => {
        setCountry(event.target.value)
    }
    const [uni, setUni] = useState(''); 
    const changeUni = (event) => {
        setUni(event.target.value)
    }
    const [level, setLevel] = useState('');
    const changeLevel = (event) => {
        setLevel(event.target.value)
    }
    const [bio, setBio] = useState(''); 
    const changeBio = (event) => {
        setBio(event.target.value)
    }
    
    return (
    <div className='flex justify-between'>
        {/* Left Div */}
        <div className='w-1/2'>
            <form className={style.formdiv}>
                {/* Form Left Side */}
                <div className= 'flex justify-between '>
                <div>
                    <label for="name" className={style.labels}>Name</label>
                    <input type="text" id="name" value={name} className={style.input} required onChange={changeName} />

                    <label for="job" className={style.labels}>Job title</label>
                    <input type="text" id="job" className={style.input} onChange={changeJob}/>

                    <label for="field" className={style.labels}>Field</label>
                    <select className={style.dropdown} required onChange={changeField}>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Business and Finance">Business and Finance</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
 
                {/* Form Right Side */}
                <div>
                    <label for="country" className={style.labels}>Country</label>
                    <input type="text" id="country" className={style.input} onChange={changeCountry}/>

                    <label for="uni" className={style.labels}>Company</label>
                    <input type="text" id="uni" className={style.input} onChange={changeUni}/>

                    <label for="level" className={style.labels}>Proficiency level</label>
                    <select className={style.dropdown} required onChange={changeLevel}>
                        <option value="Starter">Starter</option> 
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                    </select>
                </div>
                </div>
                {/* Bio Section */}
                <label htmlFor="bio" className={style.labels}>Bio</label>
                <textarea id="bio" rows="5" className={style.input} style={{ width: '100%', height: '150px' }} required onChange={changeBio}></textarea>

                {/* Button */}
                <button type="submit" className={style.button}>Build Profile</button>
            </form>
        </div>
        
        {/* Right div */}
        <div className='mr-auto p-[50px] pt-[100px] ' >
            {/* Profile div */}
            <div className={style.profilediv}>
                <div>
                    <img src="../../assets/images/femaleprofile.svg" alt="User Profile" className={style.profileimg}/>
                </div>
                <div>
                    <p className={style.name}>{name}</p>
                    <p className={style.jobtitle}>{job}</p>
                </div>
            </div>

            <hr className={style.line}/>

            {/* Bio and Background */}
            <div className={style.infodiv}>
                <div className={style.bio}>
                    <h1 className={style.title}>Bio</h1>
                    <p className={style.text} style={{maxWidth: '500px'}}>{bio}</p>
                </div>
                <div className={style.background}>
                    <h1 className={style.title}>Background</h1>
                    <h2 className={style.smalltitle}>Educational Background</h2>
                    <p className={style.text}>{uni}</p>
                    <h2 className={style.smalltitle}>Job Experience</h2>
                </div>
            </div>  

        </div>
    </div>
  )
}

export default Buildingprofile
