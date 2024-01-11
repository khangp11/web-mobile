import React from 'react'
import Home from './Home'
import Trending from './Trending'
import Cart from './Cart'
import Profile from './Profile'
import Favorites from './Favorites'
import Footer from './Footer'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Footer />
                    <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='trending' element={<Trending />} />
                        <Route path='cart' element={<Cart />} />
                        <Route path='favorites' element={<Favorites />} />
                        <Route path='profile' element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Router