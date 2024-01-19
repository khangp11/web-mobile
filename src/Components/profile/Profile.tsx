import React from 'react'
import Footer from '../layout/Footer'
import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
const Profile = () => {
    const [showpaymentcard, setshowpaymentcard] = useState(false);
    const [showaddnewaddress, setshowaddnewaddress] = useState(false);



    const payment = () => {
        setshowpaymentcard(!showpaymentcard)
    }
    const addnewaddress = () => {
        setshowaddnewaddress(!showaddnewaddress)
    };

    return (
        <>
            <header>
                <div>
                    <nav className="flex-no-wrap relative flex w-full justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 relative h-20 bg-orange-700 ">
                        <div className="flex w-full flex-wrap px-3 text-white">
                            <p className='flex-1 text-xl mt-2 ml-1'>Profile</p>
                            <div className="relative flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg w-11/12 absolute mt-12 ml-4 bg-white h-28'>
                            <div className="flex mb-3">
                                <div className="ml-3 mt-2.5">
                                    <img className="h-10 w-10 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsZf1qQn0a-KnkZMIxhttQO3el2ObknUldw&usqp=CAU" alt="Current profile photo" />
                                </div>
                                <div className='flex-1 basis-1/2 mt-1 ml-3'>
                                    <p className="text-lg"><b>Spice Hut Indian Restaurant</b></p>
                                    <p className="text-xs mt-1"> 2036 2ND AVE, NEW YORK, NY 10029</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex ml-4 mt-3 grid grid-cols-6 gap-4 items-center'>
                                <p className='flex-1 col-start-1 col-end-4 text-sm'>Accounts Credits</p>
                                <p className='flex-1 col-end-7 col-span-2 ml-6 text-lg'>$52.25</p>
                            </div>
                        </div>
                    </nav>
                </div>

            </header> <br /><br /><br /> <br /><br />

            <div className='m-2'>
                <div onClick={payment} className='flex ml-2 mr-2 border-b-2 border-gray-500 shadow-2xl bg-white items-center h-16'>
                    <div className='flex-1 basis-1/2 ml-2'>
                        <p className=""><b>Payment Cards</b></p>
                        <p className="">Add a credit or debit card</p>
                    </div>
                    <div className='flex items-center space-x-6 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                {showpaymentcard && (
                    <div id="sidebar-multi-level-sidebar" className="fixed top-0 right-0 z-40 w-full h-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                            <div className="flex w-full flex-wrap items-center justify-between px-3">
                                <p className='flex-1 text-xl mt-1'>Add Delivery Address</p>
                                <div className="relative flex items-center">
                                    <button onClick={payment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div><hr className='mt-2' />
                            <form className="mt-3">
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Delivery Area
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                >
                                                    <i className="feather-map-pin"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Complete Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                    </div>

                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Delivery Instructions
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-between mt-2'>
                                <input onClick={payment} type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Close" required />
                                <input type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-red-600 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" value="Save changes" required />
                            </div>
                        </div>
                    </div>
                )}
                <div onClick={addnewaddress} className='flex ml-2 mr-2 border-b-2 border-gray-500 shadow-2xl bg-white items-center h-16'>
                    <div className='flex-1 basis-1/2 ml-2'>
                        <p className=""><b>Address</b></p>
                        <p className="">Add or remove a delivery address</p>
                    </div>
                    <div className='flex items-center space-x-6 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                {showaddnewaddress && (
                    <div id="sidebar-multi-level-sidebar" className="fixed top-0 right-0 z-40 w-full h-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                            <div className="flex w-full flex-wrap items-center justify-between px-3">
                                <p className='flex-1 text-xl mt-1'>Add Delivery Address</p>
                                <div className="relative flex items-center">
                                    <button onClick={addnewaddress}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div><hr className='mt-2' />
                            <form className="mt-3">
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Delivery Area
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                >
                                                    <i className="feather-map-pin"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Complete Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                    </div>

                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Delivery Instructions
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        />
                                    </div>

                                    <div className="w-full md:w-12/12 px-3 mb-6">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Nickname
                                        </label>
                                        <div className="btn-group btn-group-toggle w-full" data-toggle="buttons">
                                            <label className="btn btn-outline-secondary active ml-2">
                                                <input type="radio" defaultChecked={true} /> Home
                                            </label>
                                            <label className="btn btn-outline-secondary ml-2">
                                                <input type="radio" /> Work
                                            </label>
                                            <label className="btn btn-outline-secondary ml-2">
                                                <input type="radio" /> Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-between mt-2'>
                                <input onClick={addnewaddress} type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Close" required />
                                <input type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-red-600 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" value="Save changes" required />
                            </div>
                        </div>
                    </div>
                )}
                <div className='flex ml-2 mr-2 border-b-2 border-gray-500 shadow-2xl bg-white items-center h-16'>
                    <div className='flex-1 basis-1/2 ml-2'>
                        <p className=""><b>Refer Friends</b></p>
                        <p className="">Get $10.00 FREE</p>
                    </div>
                    <div className='flex items-center space-x-6 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                {/* phan2 */}
                <NavLink to={"/delivery"}>
                    <div className='flex ml-2 mr-2 border-b-2 border-gray-500 bg-white h-16'>
                        <div className='flex items-center space-x-6 m-2'>
                            <button className='w-10 h-10 rounded-full bg-lime-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex-1 basis-1/2 mt-3.5 ml-2'>
                            <p className=""><b>Delivery Support</b></p>
                        </div>
                        <div className='flex items-center space-x-6 m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"/contact"}>
                    <div className='flex ml-2 mr-2 border-b-2 border-gray-500 bg-white h-16'>
                        <div className='flex items-center space-x-6 m-2'>
                            <button className='w-10 h-10 rounded-full bg-lime-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex-1 basis-1/2 mt-3.5 ml-2'>
                            <p className=""><b>Contac</b></p>
                        </div>
                        <div className='flex items-center space-x-6 m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </NavLink>
                <div className='flex ml-2 mr-2 border-b-2 border-gray-500 bg-white h-16'>
                    <div className='flex items-center space-x-6 m-2'>
                        <button className='w-10 h-10 rounded-full bg-lime-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 basis-1/2 mt-3.5 ml-2'>
                        <p className=""><b>Term of use</b></p>
                    </div>
                    <div className='flex items-center space-x-6 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className='flex ml-2 mr-2 border-b-2 border-gray-500 bg-white h-16'>
                    <div className='flex items-center space-x-6 m-2'>
                        <button className='w-10 h-10 rounded-full bg-lime-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-1 basis-1/2 mt-3.5 ml-2'>
                        <p className=""><b>Privacy policy</b></p>
                    </div>
                    <div className='flex items-center space-x-6 m-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div><br /><br /><br />




            <Footer />
        </>
    )
}

export default Profile