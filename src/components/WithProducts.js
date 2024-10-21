import React, { useContext,useState,useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, Button, Stack } from '@mui/material';
import { TfiArrowRight } from "react-icons/tfi";
import {ThemeContext} from './ThemeProvider'
function WithProducts({categ}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/${categ}`)
            .then((response) => {
                setData(response.data);
            });
    }, [data,setData,categ]);
    const { addItems} = useContext(ThemeContext);
    return (
        <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography variant="h4" fontSize={20} sx={{ padding: '10px', fontWeight: 'bold' }}>{categ}</Typography>
            <Stack
                direction="row"
                sx={{ alignItems: 'center' }}
            >
                {data.map((cat) => {
                    const { id, name, add, price, count } = cat;
                    return (
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
                                            onClick={()=>addItems(id,"decrement",categ)}
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
                                            onClick={()=>addItems(id,"increment",categ)}
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
                                        onClick={()=>addItems(id,"increment",categ)}
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
                    );
                })}
                <TfiArrowRight />
            </Stack>
        </div>
    );
}

export default WithProducts;

