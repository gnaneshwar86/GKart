// Home.js
import React, { useRef } from 'react';
import '../App.css';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Deals from '../components/Deals';
import Footer from '../components/Footer';
import withProductsHOC from '../components/WithProductsHOC';
import WithProducts from '../components/WithProducts';

function Home() {
  const fruitsRef = useRef(null);
  const vegetablesRef = useRef(null);
  const dairyRef = useRef(null);

  const Fruits = withProductsHOC(WithProducts, "Fruits");
  const Vegetables = withProductsHOC(WithProducts, "Vegetables");
  const Dairy = withProductsHOC(WithProducts, "Dairy");

  const handleScroll = (section) => {
    let targetRef;
    
    switch (section) {
      case 'Fruits':
        targetRef = fruitsRef;
        break;
      case 'Vegetables':
        targetRef = vegetablesRef;
        break;
      case 'Dairy & Eggs':
        targetRef = dairyRef;
        break;
      default:
        return;
    }
    const offsetTop = targetRef.current.getBoundingClientRect().top + window.scrollY - 75;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
          <Categories onCategoryClick={handleScroll} />
          <Deals />
          <div ref={fruitsRef}><Fruits /></div>
          <div ref={vegetablesRef}><Vegetables /></div>
          <div ref={dairyRef}><Dairy /></div>
          <h1>GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
