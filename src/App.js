import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login' 
import Home from './pages/Home'
import SignUp from './pages/SignUp'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App