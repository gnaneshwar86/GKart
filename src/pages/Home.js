import React from 'react'
import { useState } from "react";
import '../App.css'
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Deals from '../components/Deals'
import Fruits from '../components/Fruits'
import Vegetables from '../components/Vegetables';
import Dairy from '../components/Dairy';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
          <Categories />
          <Deals />
          <Fruits />
          <Vegetables />
          <Dairy />
          <h1>GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home