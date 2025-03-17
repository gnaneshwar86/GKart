import React,{useEffect,useState} from 'react'
import '../App.css'
import axios from 'axios';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box,Typography, Grid } from '@mui/material';

function Cart() {
    const [wishlist, setWishlist] = useState([]); 
    useEffect(() => {
        axios.get(`http://localhost:5000/wishlist`)
            .then((response) => {
                setWishlist(response.data);
            });
    }, [wishlist,setWishlist]);

  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
        <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius: '8px' }}>
        <Typography variant='h2' fontSize={26} sx={{padding:'10px',fontWeight:'bold'}}>Wishlist</Typography>
          </div>
          <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius:'1px'}}>
            <Grid container spacing={2}>
              {wishlist.map((cat)=>{
                const { id, name, add, price} = cat;
                return(
                <Grid item >
                  <Box
                            className="item"
                            key={id}
                            sx={{
                                backgroundColor: '#FFFAFA',
                                padding: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '10px'
                            }}>
                            <img src={add} alt={name} style={{ height: '25vh', borderRadius: '10%' }} />
                            <div
                                style={{
                                    display: 'flex',
                                    paddingTop: '20px',
                                    flexDirection: 'column'
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    display="block"
                                    sx={{ paddingLeft: '10px' }}
                                >
                                    {name}
                                </Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ paddingLeft: '10px' }}>
                                    ₹{price}
                                </Typography>
                                <Typography variant="caption" sx={{ paddingLeft: '10px' }}>
                                    per Kg
                                </Typography>
                            </div>
                        </Box>
                </Grid>
              )})}
            </Grid>
          </div>
          <h1>GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Cart
