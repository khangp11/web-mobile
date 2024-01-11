import React from 'react';
import './App.css';
import Home from './Components/Home';
import Trending from './Components/Trending';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Favorites from './Components/Favorites';
import Profile from './Components/Profile';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
