import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <div>
    <Box 
      sx={{ 
        backgroundColor: 'black', 
        color: 'white', 
        textAlign: 'center', 
        padding:'10px',
        bottom: 0, 
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: '10px' }}>
        © 2024  GKart.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
        <Link href="#" underline="none" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          Home
        </Link>
        <Link href="#" underline="none" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          About Us
        </Link>
        <Link href="#" underline="none" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          Contact
        </Link>
        <Link href="#" underline="none" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          Privacy Policy
        </Link>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Link href="#" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="#" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          <i className="fab fa-instagram"></i>
        </Link>
        <Link href="#" sx={{ color: 'white', '&:hover': { color: 'gray' } }}>
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </Box>
    </Box>
    </div>
  );
};

export default Footer;
