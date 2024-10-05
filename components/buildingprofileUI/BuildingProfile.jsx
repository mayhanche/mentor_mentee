import React from 'react'
import style from '@/components/buildingprofileUI/buildingprofile.module.css'

const Buildingprofile = () => {
  return (
    <div className={style.maindiv}>
        {/* Left Div */}
        <div className={style.leftdiv}>
            <form className={style.formdiv}>
                {/* Form Left Side */}
                <div className= 'flex justify-center'>
                <div className={style.formleft}>
                    <label for="name" className={style.labels}>Name</label>
                    <input type="text" id="name" className={style.input} required/>

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
                <div className={style.formright}>
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
                <textarea id="bio" className={style.input} style={{ width: '100%' }} required></textarea>
            </form>
        </div>

        {/* Right div */}
        <div clssName={style.leftdiv}>
            <h1>Hello I am a student</h1>
        </div>
    </div>
  )
}

export default Buildingprofile
