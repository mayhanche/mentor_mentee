"use client"
import React, { useState } from 'react'

const Testimonials = () => {
    const [toggle, setToggle ] = useState(1)
    const toggleTab = (index) =>{
        setToggle(index)
        console.log(toggle)
    }
  return (
    <div className='mt-[200px] mb-[200px] ' >
        <div>
            <ul className='flex justify-center gap-[100px] ' >
                <li className='cursor-pointer' onClick={() => toggleTab(1)} >Tab1</li>
                <li className='cursor-pointer' onClick={() => toggleTab(2)} >Tab2</li>
                <li className='cursor-pointer' onClick={() => toggleTab(3)} >Tab3</li>
                <li className='cursor-pointer' onClick={() => toggleTab(4)} >Tab4</li>
                <li className='cursor-pointer' onClick={() => toggleTab(5)} >Tab5</li>
            </ul>
            <div>
                <div className={toggle === 1 ? 'block' : 'hidden' }>
                    <div className='flex justify-center gap-[100px] mt-[64px]' >
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 2 ? 'block' : 'hidden' }>
                <div className='flex justify-center gap-[100px] mt-[64px]' >
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 3 ? 'block' : 'hidden' }>
                <div className='flex justify-center gap-[100px] mt-[64px]' >
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 4 ? 'block' : 'hidden' }>
                <div className='flex justify-center gap-[100px] mt-[64px]' >
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 5 ? 'block' : 'hidden' }>
                    <div className='flex justify-center gap-[100px] mt-[64px]' >
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
                            </div>
                        </div>
                        <div className='border-[#00346b8d] border-2 rounded-md w-[350px] p-[20px]' >
                            <div className='flex gap-8 mb-8 ' >
                                <img src="/assets/icons/profile.svg" alt="profile" />
                                <span>
                                    <p>John Wick</p>
                                    <p>
                                        Frontend Developer ...
                                    </p>
                                </span>
                            </div>
                            <div >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia nostrum repellendus omnis aliquam rerum amet, velit impedit vitae veniam mollitia delectus asperiores dolorem earum quasi eveniet deleniti maiores voluptatem.
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
