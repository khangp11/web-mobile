import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react';
import { Food } from '../Type';

export const Checkuot = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedhome, setIsCheckedhome] = useState(false);
    const [cartList, setCartList] = useState<Food[]>([])
    const [showPaymentInfo, setShowPaymentInfo] = useState(false);
    const [showbanking, setShowbanking] = useState(false);
    const [showcashdelivery, setShowcashdelivery] = useState(false);
    const [showaddnewaddress, setshowaddnewaddress] = useState(false);

    useEffect(() => {
        const start = () => {
            getCart()
        }
        start()
    }, [])

    const getCart = () => {
        if (localStorage.getItem('user')) {
            const user: any = localStorage.getItem('user')
            const getUser = JSON.parse(user)
            setCartList(getUser.cart)
        }
    }

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
    const addnewaddress = () => {
        setshowaddnewaddress(!showaddnewaddress)
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        setIsCheckedhome(false);
    };
    const toggleCheckboxHome = () => {
        setIsCheckedhome(!isCheckedhome);
        setIsChecked(false);
    };

    const togglePaymentInfo = () => {
        setShowPaymentInfo(!showPaymentInfo);
        setShowbanking(false);
        setShowcashdelivery(false);
    };
    const togglebanking = () => {
        setShowbanking(!showbanking);
        setShowPaymentInfo(false);
        setShowcashdelivery(false);
    };
    const toggleshowcashdelivery = () => {
        setShowcashdelivery(!showcashdelivery);
        setShowPaymentInfo(false);
        setShowbanking(false);
    };
    return (
        <>
            {isNavVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10" onClick={toggleNav}></div>}
            <div className=' bg-red-600 h-32 items-center'>
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
                        <div className="absolute fixed top-0 left-0 z-40 h-full w-4/6 sm:translate-x-0 ">
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
                    <p className='text-3xl font-bold text-white ml-4'>Checkout</p>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className='border-2 bg-slate-50 rounded shadow-2xl w-11/12'>
                        <h6 className='m-2 font-bold'>DELIVERY ADDRESS</h6>
                        <div className='flex justify-center'>
                            <div className='flex justify-between border-2 border-orange-200 w-11/12'>
                                <div onClick={toggleCheckboxHome} className='flex items-center text-basic ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <div className='m-2 '>
                                        <p className='font-bold'>Home</p>
                                        <h6 className='text-xs'>4904 Goldner Ranch, Jawaddi kalan, punjab, 141013</h6>
                                    </div>
                                </div>
                                <div className='flex items-center px-2'>
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded-full" checked={isCheckedhome}
                                        onChange={() => { }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <div className='flex justify-between border-2 border-orange-200 w-11/12'>
                                <div onClick={toggleCheckbox} className='flex items-center text-basic m-1 ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>
                                    <div className='m-2 '>
                                        <p className='font-bold'>Work</p>
                                        <h6 className='text-xs'>4904 Goldner Ranch, Jawaddi kalan, punjab, 141013</h6>
                                    </div>
                                </div>
                                <div className='flex items-center px-2'>
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded-full" checked={isChecked}
                                        onChange={() => { }} />
                                </div>
                            </div>
                        </div>
                        <div className='rounded-md bg-rose-500 text-white text-center m-4 h-8'>
                            <button onClick={addnewaddress} className='mt-1'>ADD NEW ADDRESS</button>
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
                    </div>

                </div>
                <div className='flex justify-center'>
                    <div className='bg-slate-50 rounded shadow-2xl w-11/12 mt-3'>
                        {cartList && cartList?.map((cart, index) => (
                            <div key={index} className='bg-white'>
                                <div className="border-2 w-82 p-4 flex items-center border-b border-gray-300 bg-gray-200 ">
                                    <img
                                        src={`http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/${cart.image}.jpg`}
                                        alt={cart.food_name}
                                        className="h-16 w-16 object-cover mr-4 rounded-md"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm">{cart.food_name}</p>
                                        <p className="text-gray-500">${cart.price}</p>
                                    </div>
                                    <div className="flex-1">
                                        <p>x{cart.quantity}</p>
                                    </div>
                                    <div className="flex-1">
                                        <p>${cart.quantity * cart.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="border-2 w-82 p-4 flex items-center border-b border-gray-300 bg-gray-200">
                            <div className="flex-1">
                                <p className="font-semibold">Tổng:</p>
                            </div>
                            <div className="flex-1">

                            </div>
                            <div className="flex-1">
                                <p>{cartList.reduce((total, cart) => total + cart.quantity, 0)}</p>
                            </div>
                            <div className="flex-1">
                                <p>${cartList.reduce((total, cart) => total + cart.quantity * cart.price, 0)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-3'>
                    <div className='w-11/12'>
                        <button
                            onClick={togglePaymentInfo}
                            className="border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full"
                        >
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                <i className="ml-4">Credit/Debit Card</i>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>

                        <div className='flex justify-center mt-2'>
                            {showPaymentInfo && (
                                <div className=" border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full">
                                    <div>
                                        <div>
                                            <p>Add new card</p>
                                            <samp className='text-xs'>WE ACCEPT ( Master Card / Visa Card / Rupay )</samp>
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Card Number</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Card number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Valid through(MM/yy)</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Valid through(MM/yy)' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>CVV</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter CVV number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Name on card</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Name on card' />
                                        </div>
                                        <div className='mt-3 flex items-centere'>
                                            <input type="radio" />
                                            <label className='ml-2 text-xs'>Securely save this card for a faster checkout next time.</label>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-3'>
                    <div className='w-11/12'>
                        <button
                            onClick={togglebanking}
                            className="border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full"
                        >
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                                <i className="ml-4">Net banking</i>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>

                        <div className='flex justify-center mt-2'>
                            {showbanking && (
                                <div className=" border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full">
                                    <div>
                                        <div>
                                            <p>Add new card</p>
                                            <samp className='text-xs'>WE ACCEPT ( Master Card / Visa Card / Rupay )</samp>
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Card Number</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Card number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Valid through(MM/yy)</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Valid through(MM/yy)' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>CVV</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter CVV number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Name on card</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Name on card' />
                                        </div>
                                        <div className='mt-3 flex items-centere'>
                                            <input type="radio" />
                                            <label className='ml-2 text-xs'>Securely save this card for a faster checkout next time.</label>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-3'>
                    <div className='w-11/12'>
                        <button
                            onClick={toggleshowcashdelivery}
                            className="border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full"
                        >
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <i className="ml-4">Cash on Delivery</i>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </button>

                        <div className='flex justify-center mt-2 '>
                            {showcashdelivery && (
                                <div className="absolute border-2 w-82 p-4 flex justify-between border-b bg-slate-100 shadow-2xl w-full">
                                    <div>
                                        <div>
                                            <p>Add new card</p>
                                            <samp className='text-xs'>WE ACCEPT ( Master Card / Visa Card / Rupay )</samp>
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Card Number</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Card number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Valid through(MM/yy)</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Valid through(MM/yy)' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>CVV</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter CVV number' />
                                        </div>
                                        <div className='mt-3'>
                                            <h3>Name on card</h3>
                                            <input className='h-8 w-full rounded mt-1' type="text" placeholder='Enter Name on card' />
                                        </div>
                                        <div className='mt-3 flex items-centere'>
                                            <input type="radio" />
                                            <label className='ml-2 text-xs'>Securely save this card for a faster checkout next time.</label>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div >

            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 bg-lime-600 lg:py-4 h-12">
                <div className="flex items-center justify-center px-3">
                    <span className="text-white dark:text-neutral-200 mt-2">
                        Pay ${cartList.reduce((total, cart) => total + cart.quantity * cart.price, 0)}
                    </span>
                </div>
            </nav>
        </>
    )
}
