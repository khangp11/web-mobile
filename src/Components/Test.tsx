import React from 'react'
import { useState } from 'react'

const Test = () => {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    return (
        <>
            <div className="App">
                {/* Navigation */}
                <nav className={` fixed top-0 left-0 h-full w-60 p-4 bg-gray-800 text-white transform transition-transform duration-500 ease-in-out ${navVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Your navigation content goes here */}
                    <button className="close-btn absolute top-4 right-4 text-white" onClick={toggleNav}>&times;</button>
                </nav>

                {/* Overlay */}
                {navVisible && <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={toggleNav}></div>}

                {/* Your page content goes here */}

                {/* Navigation toggle button */}
                <button className="toggle-btn fixed top-4 left-4 text-white" onClick={toggleNav}>
                    Open Navigation
                </button>
            </div>
        </>
    )
}

export default Test