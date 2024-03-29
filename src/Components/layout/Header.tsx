import axios from 'axios';
import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

interface SearchInputProps { }

interface Suggestion {
    image: string;
    name: string;
    category: string;
}

const Header = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLUListElement>(null);
    const [isInputVisible, setInputVisible] = useState(false);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setFilterVisible(false);
            }
        };
        if (isFilterVisible) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isFilterVisible]);

    const toggleNav = () => {
        setNavVisible((prev) => !prev);
        setFilterVisible(false);
    };
    const toggleFilter = () => {
        setFilterVisible((prev) => !prev);
        setNavVisible(false);
    }
    const disFilter = () => {
        setFilterVisible(false);
    }


    const handleSearchClick = () => {
        setSuggestions([
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvrEUp-CuFJwKEA4Iswu4ZJKPkdloGyya9w&usqp=CAU',
                name: 'Product 1',
                category: 'Category A',
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4LG7AueZsFBJDSPgebX7P2IStTLYEGPbFg&usqp=CAU',
                name: 'Product 2',
                category: 'Category B',
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl38q_ee8SLEEpIlCwj2GDcxfPVJjJ1ro7Q&usqp=CAU',
                name: 'Product 3',
                category: 'Category C',
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl38q_ee8SLEEpIlCwj2GDcxfPVJjJ1ro7Q&usqp=CAU',
                name: 'Product 4',
                category: 'Category d',
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl38q_ee8SLEEpIlCwj2GDcxfPVJjJ1ro7Q&usqp=CAU',
                name: 'Product 5',
                category: 'Category e',
            },
        ]);
        setInputVisible(true)
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion: Suggestion) => {
        setSearchTerm(suggestion.name);
        setSuggestions([]);
        setInputVisible(false)
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                !suggestionsRef.current?.contains(event.target as Node)
            ) {
                setSuggestions([]);
                setInputVisible(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inputRef, suggestionsRef]);


    const [navsmall, Setnavsmall] = useState(false)

    const sortby = () => {
        Setnavsmall(!navsmall)

    }

    const logout = async () => {
        const logout = await axios.post('http://localhost:8080/auth/logout');

        console.log(logout);

    }

    return (
        <>
            {isNavVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>}
            {isInputVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>}

            <nav
                className="absolute flex-no-wrap relative flex w-full justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 bg-orange-700 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 relative h-24">
                <div className="flex w-full flex-wrap justify-between px-3 ">
                    <div ref={navRef}>
                        <div className='flex grid grid-cols-6 gap-4'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-11 h-11 cursor-pointer mt-0 col-start-1 col-end-1 text-slate-200"
                                onClick={toggleNav}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div className="relative flex-1 mt-2 font-bold  col-end-9 col-span-2">
                                <p onClick={toggleFilter} className='text-white'>Filter</p>
                                {isFilterVisible && (
                                    <div id="sidebar-multi-level-sidebar" className="fixed top-0 right-0 z-40 w-full h-full sm:translate-x-0" aria-label="Sidebar">
                                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                                            <div className="flex w-full flex-wrap items-center justify-between px-3">
                                                <p className='flex-1 text-xl mt-1'>Filter</p>
                                                <div className="relative flex items-center">
                                                    <button onClick={disFilter}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div><hr className='mt-2' />

                                            <div className='flex w-full flex-wrap items-center justify-between px-3 h-12 bg-gray-100'>
                                                <p className='text-sx'>Sort by</p>
                                            </div><hr />

                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex w-full flex-wrap items-center justify-between px-3 h-12 bg-gray-100'>
                                                <p className='text-sx'>Filter</p>
                                            </div><hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex border-gray-500 shadow-2xl bg-white items-center h-12'>
                                                <div className='flex-1 ml-2'>
                                                    <p className="text-sm text-xs">Top rated</p>
                                                </div>
                                                <div className='flex items-center space-x-6 m-2'>
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 rounded-full" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='flex w-full flex-wrap items-center justify-between px-3 h-12 bg-gray-100'>
                                                <p className='text-sx'>ADDITIONAL FILTERS</p>
                                            </div><hr />
                                            <input type="range" value="50" className="mt-4 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                                            <div className='flex justify-between '>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min</label>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max</label>
                                            </div>
                                            <div className='flex justify-between'>
                                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                                <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2" placeholder="$1.000" required />
                                            </div>
                                            <div className='flex justify-between mt-2'>
                                                <input onClick={disFilter} type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Close" required />
                                                <input type="button" id="number-input" aria-describedby="helper-text-explanation" className="bg-red-600 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-white" value="Apply" required />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {isNavVisible && (
                            <div className="fixed top-0 left-0 z-40 h-full w-4/6 sm:translate-x-0 ">
                                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
                                    <ul className="space-y-2 font-medium">
                                        <NavLink to={"/login"}><li>
                                            <a href="#" className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <span className="ms-3 text-xl">Tailwind</span>
                                            </a>
                                        </li></NavLink>
                                        <li >
                                            <button onClick={sortby} type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Intro</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>

                                            </button>
                                            {navsmall && (
                                                <li>
                                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="flex-1 ms-3 whitespace-nowrap">Landing</span>
                                                    </a>
                                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="flex-1 ms-3 whitespace-nowrap">doing</span>
                                                    </a>
                                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="flex-1 ms-3 whitespace-nowrap">todo</span>
                                                    </a>
                                                    <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                        <span className="flex-1 ms-3 whitespace-nowrap">done</span>
                                                    </a>
                                                </li>
                                            )}
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Landing</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Home Page</span>
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
                                        <button onClick={logout}>
                                            <li>
                                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                                    </svg>
                                                    <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                                </a>
                                            </li>
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="z-30 rounded-lg bg-white xl:w-96 absolute mt-11 ml-6 ">
                        <div className="relative flex w-80 flex-wrap items-stretch">
                            <input
                                ref={inputRef}
                                type="search"
                                className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                onClick={handleSearchClick}
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="basic-addon2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>
                        {suggestions.length > 0 && (
                            <ul
                                ref={suggestionsRef}
                                className="suggestions absolute mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSuggestionClick(suggestion)}>
                                        <img
                                            src={suggestion.image}
                                            alt={suggestion.name}
                                            className="h-14 w-28 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="font-medium">{suggestion.name}</p>
                                            <p className="text-xs text-gray-500">{suggestion.category}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header