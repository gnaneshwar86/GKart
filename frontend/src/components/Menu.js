import React, { useContext, useEffect } from 'react'
import logo from '../assets/gkartlogo.png'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from './ThemeProvider';
function Navbar() {
  const nav = useNavigate();
  const {log,handleLog} = useContext(ThemeContext);
  const goToLogin =()=> {
    nav("/login");
  }
  const goToOrders =()=> {
    nav("/orders");
  }
  const goToWishlist =()=> {
    nav("/wishlist");
  }
  const goToHome =()=> {
    nav("/");
  }
  useEffect(()=>{

  },[log,handleLog])
  return (
        <div className='menu'>
        <img src={logo} alt="GKart" className="logohome" onClick={goToHome}/>
        <ul>
          <li onClick={goToOrders}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Orders</li>
          <li onClick={goToWishlist}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wishlist</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accounts</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help</li>
          {log === true &&
            <li onClick={handleLog}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</li>
          }
          {log === false &&
            <li onClick={goToLogin}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login</li>
          }
        </ul>
      </div>
  )
}

export default Navbar