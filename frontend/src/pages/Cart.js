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
    const [total,setTotal] = useState(0.00);
    const [len,setLen] = useState(0);
    const {addItems} = useContext(ThemeContext);
    useEffect(() => {
        axios.get("http://localhost:5000/cart")
            .then((response) => {
                setCart(response.data);
            });
        (cart.map((cat)=>{
            setTotal(cart.reduce((acc, item) => acc + (item.price * item.count), 0));
            return(<></>);
        }))
        setLen(cart.length);
        if(len === 0){
          setTotal(0);
        }
    }, [cart,total,addItems,setCart,len]);
    const handleOrders=()=>{
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

      const orderData = {
        items: cart,
        total: total.toFixed(2),
        date: formattedDate
      };

      axios.post('http://localhost:5000/orders', orderData)
        .then((response) => {
          console.error('Order placed successfully!');
          
        })
      cart.forEach((cat)=>{
        cat.count=0;
        axios.put(`http://localhost:5000/${cat.category}/${cat.id}`,cat)
        axios.delete(`http://localhost:5000/cart/${cat.id}`)
         .then(()=>{
            console.log("Item removed from Cart.");
          })
         .catch((error) => {
            console.error("Error removing item:", error);
          });
        })
      setCart([]);
        
    }

  return (
    <div className='container'>
      <Menu />
      <div className='main-con'>
        <Navbar />
        <div className='con'>
        {total > 0 &&  
        <Box  sx={{
        padding: '20px', backgroundColor: '#C0EBA6', borderRadius: '8px',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        display:'flex',justifyContent:'space-between',
        borderBottom: '1px solid #ccc',
        marginBottom:'20px'
      }}
    >
      {/* Total Section */}
      <Typography
        variant="h6"
        sx={{
          padding: '10px',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontSize: '20px',
        }}
      >
        Order Total: ₹{total.toFixed(2)}
      </Typography>

      {/* Proceed to Checkout Button */}
      <Button
        variant="contained"
        sx={{
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#347928',
          '&:hover': {
            backgroundColor: '#1b9be0',
          },
        }}
        onClick={handleOrders}
      >
        Proceed to Checkout
      </Button>
    </Box> }
        <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius: '8px' }}>
        <Typography variant='h2' fontSize={26} sx={{padding:'10px',fontWeight:'bold'}}>Cart</Typography>
          </div>
          <div style={{padding: '10px', backgroundColor: '#FFFAFA', borderRadius:'1px'}}>
            <Grid container spacing={2}>
              {cart.map((cat)=>{
                const { id, name, add, price, count, category } = cat;
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
                                            onClick={()=>addItems(id,"decrement",category)}
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
                                            onClick={()=>addItems(id,"increment",category)}
                                            sx={{
                                                alignSelf: 'center',
                                            }}
                                         >
                                               +
                                         </Button>
                                    </Stack>
                                    
                                )}
                        </Box>
                </Grid>
              )})}
            </Grid>
          </div>
          {total === 0 && 
          <h3>Your Cart is Empty.....</h3>}
          { total > 0 &&
          <>
          
          <div style={{ padding: '20px', backgroundColor: '#FFFAFA', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography
                variant='h4'
                fontSize={22}
                sx={{
                padding: '10px',
                fontWeight: 'bold',
                borderBottom: '1px solid #ccc',
                marginBottom: '10px',
                }}
            >
                Order Summary
            </Typography>
            
            {/* Quantity */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h6' fontSize={18}>
                Quantity:
                </Typography>
                <Typography variant='body1' fontSize={18}>
                {len} items 
                </Typography>
            </div>
            
            {/* Total */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h6' fontSize={18}>
                Total:
                </Typography>
                <Typography variant='body1' fontSize={18}>
                ₹{total.toFixed(2)}
                </Typography>
            </div>

            {/* Taxes (Example 5% tax)
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h6' fontSize={18}>
                Taxes (5%):
                </Typography>
                <Typography variant='body1' fontSize={18}>
                ₹{(total * 0.05).toFixed(2)}
                </Typography>
            </div> */}

            {/* Delivery Fee  */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography variant='h6' fontSize={18}>
                Delivery Fee:
                </Typography>
                <Typography variant='body1' fontSize={18}>
                ₹30.00 
                </Typography>
            </div>

            {/* Final Total */}
            <div
                style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '15px',
                paddingTop: '15px',
                borderTop: '1px solid #ccc',
                }}
            >
                <Typography
                variant='h6'
                fontSize={20}
                sx={{ fontWeight: 'bold' }}
                >
                Final Total:
                </Typography>
                <Typography
                variant='h6'
                fontSize={20}
                sx={{ fontWeight: 'bold' }}
                >
                ₹{(total + 30).toFixed(2)} 
                </Typography>
            </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: "10px" }}>
            <Button
                variant="contained"
                sx={{
                padding: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                backgroundColor: '#388E3C',
                '&:hover': {
                    backgroundColor: '#1b9be0',
                },
                }}
                onClick={handleOrders}
            >
                Proceed to Checkout
            </Button>
            </div>
            </>
            }
          <h1>GKart!</h1>
          <p>Your one-stop destination for all your grocery needs.</p>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Cart
