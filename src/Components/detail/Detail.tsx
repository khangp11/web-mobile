import React from 'react'
import Footer from '../layout/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles.css";
import { Pagination, Navigation } from 'swiper/modules';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Food } from '../Type';
import { localStorageService } from '../util/localStorageService';
import axios from 'axios';


type StarRatingProps = {
    rating: number;
};
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mx-1 my-1">
            {index < rating ? (
                <path className='text-yellow-300' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            ) : (
                <path className='text-stone-500' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            )}
        </svg>
    ));
    return <div className="flex">{stars}</div>;
};

const Detail = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [ListFood, setListFood] = useState<Food[]>([])
    const [cartList, setCartList] = useState<Food[]>([])

    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:8080/api/food`);
            setListFood(response.data || {});
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

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
    };

    const handleAddToCart = (food: Food) => {
        localStorageService(food, 1)
    };
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
    const handleIncreaseAmount = (cart: any, quanlity: any) => {
        localStorageService({ ...cart }, quanlity + 1)
        console.log({ ...cart })
        getCart()
    }
    const handleDecreaseAmount = (cart: any, quanlity: any, index: number) => {
        if (quanlity > 1) {
            localStorageService(cart, quanlity - 1)
        } else {
            handleDeleteItem(index);
        }
        getCart()
    }
    const handleDeleteItem = (index: number) => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const updatedCart = [...user.cart];
            updatedCart.splice(index, 1);
            const newUser = { ...user, cart: updatedCart };
            localStorage.setItem('user', JSON.stringify(newUser));
            console.log(newUser);
            getCart();
        }
    };

    const handleButtonClick = () => {
        const targetElement = document.getElementById('targetLocation');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {isNavVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10" onClick={toggleNav}></div>}
            <header>
                <div>
                    <nav
                        className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                        <div className="flex w-full flex-wrap items-center justify-between px-3">
                            <Link to={'/'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                            </Link>
                            <Link to={'/'} className='flex-1 text-xl mt-1 '>Back</Link>
                            <div className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" onClick={toggleNav} />
                                </svg>
                            </div>
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
                    </nav>
                </div>
            </header>
            <div className='m-2'>
                <p className='text-4xl m-1'>Conrad Chicago Restaurant</p>
                <p className='m-1'>963 Madyson Drive Suite 679</p>
                <p className='m-1'>**********(245 Reviews)</p>
            </div>
            <div className='grid gap-4 grid-cols-2 ml-3'>
                <div className=''>
                    <p> Delivery</p>
                    <p>Free</p>
                </div>
                <div className=''>
                    <p>Open time</p>
                    <p>8:00 AM</p>
                </div>
            </div>
            <div className="bg-red-600 p-4 mt-2">
                <div className="flex items-center justify-between">
                    <div className='flex space-x-4'>
                        <button onClick={handleButtonClick}>
                            <div className='rounded-full bg-white w-8 h-8 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={handleButtonClick}>
                            <div className='rounded-full bg-white w-8 h-8 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </button>
                        <button onClick={handleButtonClick}>
                            <div className='rounded-full bg-white w-8 h-8 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div>
                        <NavLink to={"/contact"}><button className='border-solid border-2 border-sky-500 rounded text-white text-xs px-4 py-1 w-20 h-8s'>Contact</button></NavLink>
                    </div>
                </div>
            </div>
            <div className='m-2 ml-4'>
                <p>FEATURED ITEMS</p>
            </div>

            <Swiper
                slidesPerView={1.4}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {ListFood.map((food) => (
                    <SwiperSlide className="rounded-lg shadow-2xl ml-2 relative ">
                        <div>
                            <div key={food.id} className='h-40' >
                                <img src={`http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/${food.image}.jpg`} alt="" />
                            </div>
                            <p className='text-base flex m-2'><b>{food.food_name}</b></p>
                            <p className='text-sm mr-1 flex m-2'>{food.description}</p>
                            <div className='h-9 grid grid-cols-3 gap-6 content-start m-2'>
                                <p className='text-sm m-1'>$30 FOR TWO</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <br />
            </Swiper> <br />
            <div className='flex justify-between'>
                <h1 className='text-2xl ml-2'><Link to={'/trending'}>Menu</Link></h1>
                <div className='flex px-2 py-1'>
                    <h2 className=''><Link to={'/trending'}>Views all</Link></h2>
                    <Link to={'/trending'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg></Link>
                </div>
            </div>

            <div className='m-3 font-semibold text-lg'>
                Quick Bites 3 ITEMS
            </div>
            <div className='bg-white mt-2 '>
                <div className="w-82 p-4 m-0 flex items-center justify-between border-b border-gray-400">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                        <p className="flex-1 text-sm">sản phẩm</p>
                    </div>
                    <button className='border-2 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out'>
                        Add
                    </button>
                </div>
            </div>
            {cartList && cartList?.map((cart, index) => (
                <div className='bg-white' key={index}>
                    <div className="w-82 p-4 flex items-center justify-between border-b border-gray-400">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                            </svg>
                            <p className="flex-1 text-sm">{cart.food_name}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-4">${cart.price}</p>
                            <div className="flex items-center space-x-2">
                                <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleIncreaseAmount(cart, cart.quantity)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                                <input type="text" value={cart.quantity} readOnly className="w-10 px-2 py-1 text-center border border-gray-400 bg-gray-400" />
                                <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleDecreaseAmount(cart, cart.quantity, index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            <div className='mt-2 ml-3 text-lg font-semibold'>
                Starters 3 ITEMSS
            </div>
            <div className='bg-white mt-2'>
                <div className="w-82 p-4 m-0 flex items-center border-b border-gray-300">
                    <img
                        src="http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/your_default_image.jpg"
                        alt="Default"
                        className="h-14 w-14 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                        <p className="text-sm">Chicken Tikka Sub</p>
                        <p className="text-gray-500">${cartList[0]?.price}</p>
                    </div>
                    <button className='border-2 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out'>
                        Add
                    </button>
                </div>
            </div>
            {cartList && cartList?.map((cart, index) => (
                <div key={index} className='bg-white'>
                    <div className="border-2 w-82 p-4 flex items-center border-b border-gray-300">
                        <img
                            src={`http://res.cloudinary.com/dlxwm5pax/image/upload/v1700937458/${cart.image}.jpg`}
                            alt={cart.food_name}
                            className="h-14 w-14 rounded-full object-cover mr-4"
                        />
                        <div className="flex-1">
                            <p className="text-sm">{cart.food_name}</p>
                            <p className="text-gray-500">${cart.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleIncreaseAmount(cart, cart.quantity)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                            <input type="text" value={cart.quantity} readOnly className="w-10 px-2 py-1 text-center border border-gray-400 bg-gray-400" />
                            <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleDecreaseAmount(cart, cart.quantity, index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className='m-3 font-semibold text-lg'>
                Soups 8 ITEMS
            </div>
            <div className='bg-white mt-2 '>
                <div className="w-82 p-4 m-0 flex items-center justify-between border-b border-gray-400">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>
                        <p className="flex-1 text-sm">sản phẩm</p>
                    </div>
                    <button className='border-2 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out'>
                        Add
                    </button>
                </div>
            </div>
            {cartList && cartList?.map((cart, index) => (
                <div className='bg-white' key={index}>
                    <div className="w-82 p-4 flex items-center justify-between border-b border-gray-400">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                            </svg>
                            <p className="flex-1 text-sm">{cart.food_name}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-4">${cart.price}</p>
                            <div className="flex items-center space-x-2">
                                <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleIncreaseAmount(cart, cart.quantity)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                                <input type="text" value={cart.quantity} readOnly className="w-10 px-2 py-1 text-center border border-gray-400 bg-gray-400" />
                                <button className='border-2 text-black px-2 py-1 rounded hover:bg-gray-200 transition duration-300 ease-in-out' onClick={() => handleDecreaseAmount(cart, cart.quantity, index)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='font-medium items-center flex justify-between border-2 bg-slate-50 m-4 rounded shadow-2xl h-12'>
                <p className='ml-2 text-base'>Rate this Place</p>
                <div className='flex mr-2'>
                    <StarRating rating={4} />
                </div>
            </div>
            <div id="targetLocation" className='border-2 bg-slate-50 rounded shadow-2xl m-4'>
                <div className='m-4'>
                    <p>Ratings and Reviews</p>
                    <div className='flex mr-2'>
                        <StarRating rating={4} />334
                    </div>
                    <p>Rated 3.5 out of 5</p>
                </div>

                <div className='m-4'>
                    <div className="rating-list flex items-center">
                        <div className="rating-list-left text-sm">5 Star</div>
                        <div className="rating-list-center flex-1">
                            <div className="relative pt-1">
                                <div className="flex items-center ml-3">
                                    <div className="w-56 bg-gray-300 rounded-full">
                                        <div className="w-56 bg-gray-500 text-xs leading-none py-1 text-center text-white rounded size-2" style={{ width: '56%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-list-right text-sm">56%</div>
                    </div>
                    <div className="rating-list flex items-center">
                        <div className="rating-list-left text-sm">4 Star</div>
                        <div className="rating-list-center flex-1">
                            <div className="relative pt-1">
                                <div className="flex items-center ml-3">
                                    <div className="w-56 bg-gray-300 rounded-full">
                                        <div className="w-56 bg-gray-500 text-xs leading-none py-1 text-center text-white rounded size-2" style={{ width: '23%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-list-right text-sm">23%</div>
                    </div>
                    <div className="rating-list flex items-center">
                        <div className="rating-list-left text-sm">3 Star</div>
                        <div className="rating-list-center flex-1">
                            <div className="relative pt-1">
                                <div className="flex items-center ml-3">
                                    <div className="w-56 bg-gray-300 rounded-full">
                                        <div className="w-56 bg-gray-500 text-xs leading-none py-1 text-center text-white rounded size-2" style={{ width: '11%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-list-right text-sm">11%</div>
                    </div>
                    <div className="rating-list flex items-center">
                        <div className="rating-list-left text-sm">2 Star</div>
                        <div className="rating-list-center flex-1">
                            <div className="relative pt-1">
                                <div className="flex items-center ml-3">
                                    <div className="w-56 bg-gray-300 rounded-full">
                                        <div className="w-56 bg-gray-500 text-xs leading-none py-1 text-center text-white rounded size-2" style={{ width: '6%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-list-right text-sm">6%</div>
                    </div>
                    <div className="rating-list flex items-center">
                        <div className="rating-list-left text-sm">1 Star</div>
                        <div className="rating-list-center flex-1">
                            <div className="relative pt-1">
                                <div className="flex items-center ml-3">
                                    <div className="w-56 bg-gray-300 rounded-full">
                                        <div className="w-56 bg-gray-500 text-xs leading-none py-1 text-center text-white rounded size-2" style={{ width: '4%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-list-right text-sm">4%</div>
                    </div>
                </div>
                <div className='rounded-md bg-rose-500 text-white text-center m-4 h-8'>
                    <button className='mt-1'>Rate and Review</button>
                </div>
            </div>

            {/* comment */}
            <div className='border-2 bg-slate-50 rounded shadow-2xl m-4'>
                <div>
                    <div className='flex justify-between items-center mr-4'>
                        <p className='text-lg ml-4 mt-2'>All Ratings and Reviews</p>
                        <p className='text-sm'>Top Rated</p>
                    </div>
                    <div>
                        <div className='flex mt-1 items-center justify-between'>
                            <div className='flex items-center'>
                                <img className="h-14 w-14 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZIrcDxg1eZ_DB4OmrvRg7w96aPH_0yw1YhMpg77APsUAMj8GcKGDV8OWkQ&s" alt="" />
                                <div className='m-1'>
                                    <p className='font-bold'>Trump</p>
                                    <p>Tue, 20 mar 2020</p>
                                </div>
                            </div>
                            <div className='flex mr-2'>
                                <StarRating rating={4} />
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-4'>
                            <div></div>
                            <div className='col-span-5'>
                                <span >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</span>
                                <div className='flex mt-1'>
                                    <button type='submit' className="border-solid border-2 border-sky-500 text-red px-1 py-0.4 mr-1 rounded flex h-6 hover:bg-gray-300 hover:text-white-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        <p className='ml-1'>856M</p>
                                    </button>
                                    <button type='submit' className="border-solid border-2 border-sky-500 text-red px-1 py-0.4 mr-1 rounded flex h-6 hover:bg-gray-300 hover:text-white-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                        </svg>
                                        <p className='ml-1'>158K</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-2' />
                    <div>
                        <div className='flex mt-1 items-center justify-between'>
                            <div className='flex items-center'>
                                <img className="h-14 w-14 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZIrcDxg1eZ_DB4OmrvRg7w96aPH_0yw1YhMpg77APsUAMj8GcKGDV8OWkQ&s" alt="" />
                                <div className='m-1'>
                                    <p className='font-bold'>Trump 1</p>
                                    <p>Tue, 20 mar 2020</p>
                                </div>
                            </div>
                            <div className='flex mr-2'>
                                <StarRating rating={4} />
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-4'>
                            <div></div>
                            <div className='col-span-5'>
                                <span >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</span>
                                <div className='flex mt-1'>
                                    <button type='submit' className="border-solid border-2 border-sky-500 text-red px-1 py-0.4 mr-1 rounded flex h-6 hover:bg-gray-300 hover:text-white-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        <p className='ml-1'>856M</p>
                                    </button>
                                    <button type='submit' className="border-solid border-2 border-sky-500 text-red px-1 py-0.4 mr-1 rounded flex h-6 hover:bg-gray-300 hover:text-white-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                        </svg>
                                        <p className='ml-1'>158K</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-2' />
                </div>
                <div className='flex items-center justify-center'>
                    <button type='submit' className='flex items-center justify-center h-10'>
                        <p className='text-red text-basic font-bold'>See All Reviews</p>
                    </button>
                </div>
            </div>

            <div className='border-2 bg-slate-50 rounded shadow-2xl m-4'>
                <div className='text-basic ml-4 mt-2 font-bold'>
                    <p className='text-red-600'>leave Comment</p>
                </div>
                <div className='flex mt-1 items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='m-2'>
                            <p className='text-xs ml-2 font-thin'>Rate the Place</p>
                        </div>
                    </div>
                    <div className='flex mr-2'>
                        <StarRating rating={4} />
                    </div>
                </div>
                <div className='m-2'>
                    <p className='text-xs ml-2 font-thin'> Your Comment</p>
                    <textarea className="ml-2 mt-1 w-80 h-14 resize-none p-4 border rounded shadow"></textarea>
                </div>
                <div className='rounded-md bg-rose-500 text-white text-center m-4 h-8'>
                    <button className='mt-1'>Submit Comment</button>
                </div>
            </div> <br /><br /> <br />

            <Footer />
        </>
    )
}

export default Detail