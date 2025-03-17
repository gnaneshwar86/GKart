import React from 'react'
import { useState } from "react";
import '../App.css'
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button,Box,Typography,Stack } from '@mui/material';
import profi from '../assets/prof.jpg'
function Home() {
  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
        <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius: '8px', marginTop:'5vh' }}>
        <Typography variant='h4' fontSize={20} sx={{padding:'10px',fontWeight:'bold'}}>Profile</Typography>
        <Stack
      direction="row"  
      justifyContent='space-between'
      sx={{alignItems:'center',
      }}
      >
          <Box className="item" 
             sx={{
                padding:'20px',
                display:'flex',
                flexDirection:'column',
                margin:'10px'}}>
            <img src={profi} alt="ProfilePic" style={{ height:"25vh",borderRadius:"10%"}} />
            <div style={{
                display:'flex',
                paddingTop:'20px',
                flexDirection:'column'}}>
                <Typography 
                    variant="h6" 
                    display="block" sx={{
                        paddingLeft:'10px'}}>
                Zenitsu
                </Typography>
            </div>
            </Box>
          <Box className="item" 
                 textAlign="right"
             sx={{
                padding:'20px',
                display:'flex',
                flexDirection:'column',
                margin:'10px'}}>
            <div style={{
                display:'flex',
                paddingTop:'20px',
                flexDirection:'column'}}>
                <Typography 
                    variant="h6" 
                    display="block" sx={{
                        paddingLeft:'10px'}}>
                Zenitsu <br />
                zenisquad@gmail.com <br />
                +91 9876543210
                </Typography>
            </div>
            </Box>
            </Stack>
          </div>
          <h1>GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home