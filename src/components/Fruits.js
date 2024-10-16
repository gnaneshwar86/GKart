import React, { useState, useEffect } from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
function Fruits() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/fruits')
            .then((response) => {
                setData(response.data);
            });
    }, []);
    const addItems = (id) => {
        const item = data.find((cat)=>cat.id===id);
        const updatedCount = item.count + 1;
        axios.put(`http://localhost:5000/fruits/${id}`,{count:updatedCount})
            .then((response) => {
                setData(data.map((item) => (item.id === id ? response.data : item)));
            });
    };

    
    return (
        <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', marginTop: '5vh' }}>
            <Typography variant="h4" fontSize={20} sx={{ padding: '10px', fontWeight: 'bold' }}>Fruits</Typography>
            <Stack
                direction="row"
                sx={{ alignItems: 'center' }}
            >
                {data.map((cat) => {
                    const { id, name, add, price } = cat;
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
                            }}
                        >
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
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={()=>addItems(id)}
                                sx={{
                                    marginTop: '20px',
                                    alignSelf: 'center',
                                    width: '100%',
                                    textTransform: 'none',
                                }}
                            >
                                Add
                            </Button>
                        </Box>
                    );
                })}
                <FaArrowRight style={{ padding: '20px' }} />
            </Stack>
        </div>
    );
}

export default Fruits;

