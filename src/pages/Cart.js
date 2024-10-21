import React,{useContext,useEffect,useState} from 'react'
import '../App.css'
import axios from 'axios';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button,Box,Typography,Stack, Grid } from '@mui/material';
import { ThemeContext } from '../components/ThemeProvider';

function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/cart")
            .then((response) => {
                setCart(response.data);
            });
    }, [cart,setCart]);
  const {addItems} = useContext(ThemeContext);
  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
        <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius: '8px', marginTop:'5vh' }}>
        <Typography variant='h4' fontSize={20} sx={{padding:'10px',fontWeight:'bold'}}>Cart</Typography>
          </div>
          <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius:'1px'}}>
            <Grid container spacing={2}>
              {cart.map((cat)=>{
                const { id, name, add, price, count } = cat;
                return(
                <Grid item >
                  <Box
                            className="item"
                            key={id}
                            sx={{
                                backgroundColor: '#FFFAFA',
                                padding: '20px',
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
                                {count !== 0 && (
                                    
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        sx={{ alignItems: 'center',
                                            marginTop : '20px',
                                         }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            // onClick={()=>addItems(id,"decrement",categ)}
                                            sx={{
                                            }}
                                         >
                                               -
                                         </Button>
                                        <Box variant='outlined' sx={{
                                            display:'flex',
                                            width: '40px',
                                            height: '30px',
                                            borderRadius: 1,
                                            color:'blue',
                                            alignItems:'center',
                                            justifyContent:'center', 
                                            border:'2px solid #FFFAFA',
                                            boxShadow: '0px 0px 15px rgba(0.1, 0.1, 0.1, 0.1)',  
                                            fontWeight:'bold'                                
                                          }}>
                                            {count}
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            // onClick={()=>addItems(id,"increment",categ)}
                                            sx={{
                                                alignSelf: 'center',
                                            }}
                                         >
                                               +
                                         </Button>
                                    </Stack>
                                    
                                )}
                                {count === 0 && (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        // onClick={()=>addItems(id,"increment",categ)}
                                        sx={{
                                            marginTop: '20px',
                                            alignSelf: 'center',
                                            width: '100%',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Add
                                    </Button>
                                )}
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