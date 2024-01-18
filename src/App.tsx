import React from 'react';
import './App.css';
import Home from './Components/Home';
import Trending from './Components/trending/Trending';
import Header from './Components/layout/Header';
import Cart from './Components/cart/Cart';
import Favorites from './Components/favorite/Favorites';
import Profile from './Components/profile/Profile';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Detail from './Components/detail/Detail';
import { Contact } from './Components/detail/Contact';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='detail' element={<Detail />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
