import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login' 
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import ThemeProvider from './components/ThemeProvider'
import Orders from './pages/Orders'
import Wishlist from './pages/Wishlist'
function App() {
  
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App