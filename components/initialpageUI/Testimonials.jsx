"use client"
import React, { useState } from 'react'
import style from '@/components/initialpageUI/testimonials.module.css'

const Testimonials = () => {
    const [toggle, setToggle ] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index)
        console.log(toggle)
    }
    return (
    <div className='mt-[150px] mb-[200px]'>
        <div>
            <ul className={style.titlelist}>
                <li className={toggle == 1 ? style.titleactive : style.title} onClick={() => toggleTab(1)} >Information Technology</li>
                <li className={toggle == 2 ? style.titleactive : style.title} onClick={() => toggleTab(2)} >Healthcare</li>
                <li className={toggle == 3 ? style.titleactive : style.title} onClick={() => toggleTab(3)} >Engineering</li>
                <li className={toggle == 4 ? style.titleactive : style.title} onClick={() => toggleTab(4)} >Business and Finance</li>
                <li className={toggle == 5 ? style.titleactive : style.title} onClick={() => toggleTab(5)} >Education</li>
            </ul>

            <div>
                <div className={toggle === 1 ? 'block' : 'hidden' }>
                    <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Sarah Mitchell</p>
                                    <p className={style.jobtitle}>
                                        Web Developer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                I believe mentorship is crucial in IT. As a web developer, I can help guide mentees in mastering front-end frameworks, which will enhance their job prospects.
                            </div>
                        </div>
                        <div className={style.box} >
                            <div className={style.info} >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Sarah Kim</p>
                                    <p className={style.jobtitle}>
                                       Data Analyst
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                For aspiring data analysts, a mentor can provide real-world insights into data manipulation, analysis, and visualization, which go beyond theory.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>David Lee</p>
                                    <p className={style.jobtitle}>
                                        Cloud Architect
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Learning cloud architecture is complex. With a mentor's guidance, mentees can navigate the growing field of cloud computing with hands-on learning and practical advice.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 2 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Laura Walker</p>
                                    <p className={style.jobtitle}>
                                        Registered Nurse
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Navigating healthcare can be overwhelming. A mentor can guide mentees through the challenges of clinical practice, patient care, and career progression.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Anthony Garcia</p>
                                    <p className={style.jobtitle}>
                                        Healthcare Administrator
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Mentorship is essential in healthcare management. It provides mentees with a unique perspective on leadership, decision-making, and hospital operations
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Emily Sanchez</p>
                                    <p className={style.jobtitle}>
                                        Medical Researcher
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Having a mentor in medical research is invaluable for understanding experimental design, research ethics, and career development in academic or clinical research.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 3 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Robert Davis</p>
                                    <p className={style.jobtitle}>
                                        Mechanical Engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Engineering can be highly technical, and a mentor's experience helps mentees understand industry trends, project management, and practical problem-solving skills.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Jessica Brown</p>
                                    <p className={style.jobtitle}>
                                        Civil Engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                For young engineers, mentorship is key in gaining real-world experience in infrastructure projects and understanding regulations and safety protocols.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Christopher Martinez </p>
                                    <p className={style.jobtitle}>
                                        Electrical Engineer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                A mentor can guide aspiring engineers on industry-standard tools, advanced circuit design, and career paths in electrical engineering.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 4 ? 'block' : 'hidden' }>
                <div className={style.testimonialdiv} >
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Linda Anderso</p>
                                    <p className={style.jobtitle}>
                                        Financial Analyst
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                In finance, understanding market trends and financial modeling can be challenging. A mentor helps translate theory into practical investment and decision-making skills."
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>James Wilson</p>
                                    <p className={style.jobtitle}>
                                        Business Consultant
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                A business consultant mentor provides valuable insights into strategic planning, operations, and navigating corporate structures.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Ashley Thompson</p>
                                    <p className={style.jobtitle}>
                                        Accountant
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Accounting is more than crunching numbers. Mentorship offers guidance on tax laws, financial audits, and growing in your accounting career
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 5 ? 'block' : 'hidden' }>
                    <div className={style.testimonialdiv}>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Jennifer Moore</p>
                                    <p className={style.jobtitle}>
                                        Educational Consultant
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                Education is evolving, and mentors can help future educators by providing insight into teaching methodologies, curriculum design, and student engagement strategies.
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Matthew Clark </p>
                                    <p className={style.jobtitle}>
                                        School Principal
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                As a mentor, I aim to help aspiring school leaders navigate the complexities of educational management, staff development, and policy implementation
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.info}>
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p className={style.name}>Rachel Adams</p>
                                    <p className={style.jobtitle}>
                                        Curriculum Developer
                                    </p>
                                </span>
                            </div>
                            <hr className={style.line}/>
                            <div className={style.content}>
                                I can help mentees understand how to design lesson plans that align with educational standards while also fostering creativity and critical thinking in students.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
