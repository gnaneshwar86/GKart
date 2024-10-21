import React from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const nav = useNavigate();
  const gotoProfile=()=>nav('/profile');
  const gotoCart=()=>nav('/cart');
  return (
    <div className='dashboard'>
        <Search />
        <div style={{ display: 'flex', gap: '40px',paddingRight:'7vh' }}>
            <FaCartShopping className="prof" cursor={"pointer"} color='white' onClick={gotoCart} size={25}/>
            <CgProfile className="prof" cursor={"pointer"} onClick={gotoProfile} color='white' size={25}/>
        </div>
      </div>
  )
}

export default Navbar