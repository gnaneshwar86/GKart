import React from 'react'
import { useState } from "react";
import Search from '../components/Search'

import '../App.css'
import logo from '../assets/gkartlogo.png'
import Categories from '../components/Categories';
function Home() {
  return (
    <div className='container'>
      <div className='menu'>
        <img src={logo} alt="GKart" className="logohome" />
        <ul>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Orders</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</li>
        </ul>
      </div>
      <div className='main-con'>
      <div className='dashboard'>
        <Search />
      </div>
        <div className='con'>
          <Categories />
          <h1>Welcome to GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
        </div>
      </div>
    </div>
  )
}

export default Home