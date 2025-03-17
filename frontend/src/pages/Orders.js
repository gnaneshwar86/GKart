import React,{useEffect,useState} from 'react'
import '../App.css'
import axios from 'axios';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Box,Typography,Stack, Grid } from '@mui/material';

function Cart() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/orders")
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
          <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius: '8px' }}>
            <Typography variant='h2' fontSize={26} sx={{padding:'10px',fontWeight:'bold'}}>My Orders</Typography>
          </div>
          <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius:'1px'}}>
          <Grid container spacing={2}>
            {orders.map((order, index) => {
              const { items, total, date } = order;
              return (
                <Grid item key={index} xs={12}>
                  <div style={{backgroundColor:'#ECFFE6',padding:10,borderRadius:10}}>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                      Order Date: {date}
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                      Total: ₹{total}
                    </Typography>
                  </div>
                  <Grid container spacing={2}>
                    {items.map((item) => {
                      const { id, name, add, price, count } = item; 
                      return (
                        <Grid item key={id}>
                          <Box
                            className="item"
                            sx={{
                              backgroundColor: '#FFFAFA',
                              padding: '15px',
                              display: 'flex',
                              flexDirection: 'column',
                              margin: '10px',
                            }}
                          >
                            <img
                              src={add}
                              alt={name}
                              style={{ height: '25vh', borderRadius: '10%' }}
                            />
                            <div
                              style={{
                                display: 'flex',
                                paddingTop: '20px',
                                flexDirection: 'column',
                              }}
                            >
                              <Typography
                                variant="body2"
                                display="block"
                                sx={{ paddingLeft: '10px' }}
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{ paddingLeft: '10px' }}
                              >
                                ₹{price}
                              </Typography>
                              <Typography variant="caption" sx={{ paddingLeft: '10px' }}>
                                per Kg
                              </Typography>
                            </div>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              sx={{
                                alignItems: 'center',
                                marginTop: '20px',
                              }}
                            >
                              <Typography
                                variant="body"
                                sx={{ paddingLeft: '10px' }}
                              >
                                Quantity: {count}
                              </Typography>
                            </Stack>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
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
