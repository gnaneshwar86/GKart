import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Deals from '../components/Deals'
// import Fruits from '../components/WithProducts'
// import Vegetables from '../components/Vegetables';
// import Dairy from '../components/Dairy';
import Footer from '../components/Footer';
import withProductsHOC from '../components/WithProductsHOC';
import WithProducts from '../components/WithProducts';
function Home() {

  const Fruits = withProductsHOC(WithProducts,"Fruits");
  const Vegetables = withProductsHOC(WithProducts,"Vegetables");
  const Dairy = withProductsHOC(WithProducts,"Dairy");

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