import React, { useState } from 'react';

const Header = () => {
    const [isNavVisible, setNavVisibility] = useState(false);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
        console.log(isNavVisible)
    };

    return (
        <>
            <header>
                <div>
                    <nav
                        className="flex-no-wrap relative flex w-full justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 bg-orange-700 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 relative h-24">
                        <div className="flex w-full flex-wrap justify-between  px-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-11 h-11 cursor-pointer mt-0"
                                onClick={toggleNav}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <div className={`nav-container ${isNavVisible ? 'visible' : 'hidden'}`}>
                                show nav
                            </div>
                            <div className="relative flex mt-2 font-bold text-slate-200">
                                <p>Filter</p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white xl:w-96 absolute mt-11 ml-8">
                            <div className="relative flex w-80 flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2" />

                                {/* <!--Search icon--> */}
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
                                            clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header