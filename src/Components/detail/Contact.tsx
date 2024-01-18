import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react';

export const Contact = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [isFilterVisible, setFilterVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setNavVisible(false);
            }
        };
        if (isNavVisible) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavVisible]);

    const toggleNav = () => {
        setNavVisible((prev) => !prev);
        setFilterVisible(false);
    };
    return (
        <>
            {isNavVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10" onClick={toggleNav}></div>}
            <div className='bg-red-600 h-32 items-center'>
                <div className='flex justify-between items-center mr-4'>
                    <Link to={"/detail"}><p className='text-lg ml-4 mt-2 text-white flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Back</p></Link>
                    <p className='text-sm text-white'>
                        <svg onClick={toggleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </p>
                    {isNavVisible && (
                        <div className="fixed top-0 left-0 z-40 h-full w-4/6 sm:translate-x-0 ">
                            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <a href="#" className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <span className="ms-3 text-xl">Tailwind</span>
                                        </a>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Intro</span>
                                        </button>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Landing</span>
                                            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Home Page</span>
                                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Authencation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Trending</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Close</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <p className='text-2xl font-bold text-white ml-4'>Contact US</p>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className='absolute border-2 bg-slate-50 rounded shadow-2xl w-80'>
                        <div className='m-2'>
                            <h3 className='font-bold'>Tell us about yourself</h3>
                            <h4 className='mt-1'>Whether you have questions or you would just like to say hello, contact us</h4>

                            <div className='mt-3'>
                                <h3>Your Name</h3>
                                <input className='h-8 w-full rounded mt-1' type="text" placeholder='Gurdeep Osahan' />
                            </div>
                            <div className='mt-3'>
                                <h3>Email Address</h3>
                                <input className='h-8 w-full rounded mt-1' type="text" placeholder='vkhang261@gmail.com' />
                            </div>
                            <div className='mt-3'>
                                <h3>Phone Number</h3>
                                <input className='h-8 w-full rounded mt-1' type="text" placeholder='024735837' />
                            </div>
                            <div className='mt-3'>
                                <h3>How can we help you?</h3>
                                <textarea className='w-full mt-1' placeholder='Hi there, I would like to _ _'></textarea>
                            </div>
                            <div className='rounded-md bg-rose-500 text-white text-center mt-2 h-8'>
                                <button className='m-1'>Submit Comment</button>
                            </div>
                        </div>
                        <iframe className='m-2 mt-4 mb-2' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31352.342020267028!2d106.7011261!3d10.8080376!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1705569804271!5m2!1svi!2s" width="296" height="130" loading="lazy"></iframe>

                    </div>
                </div>
            </div>
        </>
    )
}
